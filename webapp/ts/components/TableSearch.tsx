import React, { forwardRef, useRef } from "react";
import styled from "styled-components";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  usePagination,
  useRowSelect
} from "react-table";
import IndeterminateCheckbox from './IndeterminateCheckbox';
import TablePagination from './TablePagination';

// A great library for fuzzy filtering/sorting items

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

// Define a default UI for filtering
function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (<span>
    Search:{" "}
    <input value={value || ""} onChange={e => {
      setValue(e.target.value);
      onChange(e.target.value);
    }} placeholder={`${count} records...`} style={{
      fontSize: "1.1rem",
      border: "0"
    }} />
  </span>);
}

// Define a default UI for filtering
function DefaultColumnFilter({
  column: {
    filterValue,
    preFilteredRows,
    setFilter
  }
}) {
  const count = preFilteredRows.length;

  return (<input value={filterValue || ""} onChange={e => {
    setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
  }} placeholder={`Search ${count} records...`} />);
}

const get_renderer = (obj) => {
  const gql_render = {
    Implementation: JSON.stringify
  };

  try {
    return gql_render[obj[0]["__typename"]];
  } catch {
    return (i) => i;
  }
};
const strip__fields = (e) => {
  Object.keys(e).map((k) => k.startsWith("__") && delete e[k]);
};

const flatten = (data) => {
  data.map((e) => {
    Object.keys(e).map((k) => {
      if (Array.isArray(e[k])) {
        // console.log("subfield", e[k]);
        const renderer = get_renderer(e[k]);
        e[k].map((i) => strip__fields(i));
        e[k] = renderer(e[k]);
      }
    });
  });
  return data;
};
//
const getColumns = (data, parent = "") => {
  console.debug("getColumns", data);
  return Object.keys(data[0]).filter((e) => !e.startsWith("__")).map((e) => {
    parent = parent
      ? parent + "."
      : "";
    var h = {
      Header: e,
      sortable: true
    };
    h["accessor"] = parent + e;
    try {
      const subcell = data[0][e];
      if (subcell[0].hasOwnProperty("__typename")) {
        h["columns"] = getColumns(subcell, e);
        delete h["accessor"];
      }
    } catch (e) {
      console.debug(e);
    }
    return h;
  });
};

function isEmpty(e) {
  return Boolean(Object.keys(Object(e)).length);
}

// Our table component
export default function TableSearch({
  data,
  selectField = "done",
  onSave = console.log,
}) {
  data = flatten(data);  // React.useMemo(() => flatten(data), []);

  console.log("TableSearch.data", data);
  const columns = React.useMemo(() => getColumns(data), []);
  console.log("TableSearch.columns", columns);

  const hasSelectableColumn = columns[0]["accessor"] == selectField;
  const filterTypes = React.useMemo(() => ({
    // Add a new fuzzyTextFilterFn filter type.
    // Or, override the default text filter to use
    // "startWith"
    text: (rows, id, filterValue) => {
      return rows.filter((row) => {
        const rowValue = row.values[id];
        return rowValue !== undefined
          ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase())
          : true;
      });
    }
  }), []);

  const defaultColumn = React.useMemo(() => ({
    // Let's set up our default Filter UI
    Filter: DefaultColumnFilter
  }), []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
    // filters
    preGlobalFilteredRows,
    setGlobalFilter,

    // selectable
    selectedFlatRows,

    // pagination
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
  } = useTable({
    columns,
    data,
    defaultColumn, // defaultColumn has a filter enabled via DefaultColumnFilter
    filterTypes,
    initialState: {pageSize: 50}
  },
    useFilters, // useFilters!
    useGlobalFilter, // useGlobalFilter!
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => hasSelectableColumn ? [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (<div>
            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          </div>),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => {

            /**
             * Override row.toggleRowSelected to update `done` on toggle.
             */
            const f = row.toggleRowSelected;
            row.toggleRowSelected = (e) => {
              state.changedRows = state.changedRows ? state.changedRows : {};
              console.log("toggleRowSelected", row.values, e);

              if (e != Boolean(row.values.done)) {
                row.values.done = e ? 1 : 0;
                state.changedRows[row.values.name] = row.values.done;
              }
              f(e);
            };

            // Call toggleRowSelected when needed.
            const v = Boolean(row.values.done) || false;
            console.debug("renderingSelectionColumn:", row.values.name, v);
            if (v != row.getToggleRowSelectedProps().checked) {
              row.toggleRowSelected(v);
            }

            const props = row.getToggleRowSelectedProps();
            console.debug("props", props);
            return (<div>
              <IndeterminateCheckbox {...props}
              />
            </div>)
          }
        },
        ...columns
      ] : columns
      );
    });

  console.log("TableSearch: rendering table");
  return (<>
    {isEmpty(state.changedRows) &&
      <input type="button" onClick={() => { onSave(state.changedRows) } } className="action" value="SAVE TABLE" />

    }
    <table {...getTableProps()}>
      <thead>
        {
          headerGroups.map((headerGroup) => (<tr {...headerGroup.getHeaderGroupProps()}>
            {
              headerGroup.headers.map((column) => (<th {...column.getHeaderProps()}>
                {column.render("Header")}
                {/* Render the columns filter UI */}
                <div>{
                  column.canFilter
                    ? column.render("Filter")
                    : null
                }</div>
              </th>))
            }
          </tr>))
        }
        <tr>
          <th colSpan={visibleColumns.length} style={{
            textAlign: "left"
          }}>
            <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter} />
          </th>
        </tr>
      </thead>
      <tbody {...getTableBodyProps()}>
        {
          page.map((row, i) => {
            console.debug("preparing row: ", row);
            prepareRow(row);
            console.debug("Prepared row:", row);

            return (<tr {...row.getRowProps()}>
              {
                row.cells.map((cell) => {
                  return (<td {...cell.getCellProps()}>{cell.render("Cell")}</td>);
                })
              }
            </tr>);
          })
        }
      </tbody>
    </table>
    <br />
    <div>Showing the first results of {rows.length} rows</div>
    < div > <pre>
      <code>{JSON.stringify(state.filters, null, 2)}</code>
    </pre>
    </div>
    <TablePagination gotoPage={gotoPage} previousPage={previousPage}
      canPreviousPage={canPreviousPage}
      canNextPage={canNextPage}
      pageCount={pageCount}
      nextPage={nextPage}

    />

    < pre > <code>
      {
        JSON.stringify({
          selectedRowIds: state.selectedRowIds,
          "selectedFlatRows[].original": selectedFlatRows.map((d) => d.original.name)
        }, null, 2)
      }
    </code>
    </pre>
  </>);
}
