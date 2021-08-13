import React from 'react';

const TablePagination = ({
  gotoPage,
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
  pageCount
}) => {
  return (<div className="pagination">
    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
      {"<<"}
    </button>{" "}
    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
      {" "}
      {"<"}{" "}
    </button>{" "}
    <button onClick={() => nextPage()} disabled={!canNextPage}>
      {">"}
    </button>{" "}
    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
      {" "}
      {">>"}{" "}
    </button>{" "}
    <span>Page
    </span>{" "}
  </div>);
};

export default TablePagination;
