/* eslint-disable */
import React, { useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import js from "react-syntax-highlighter/dist/esm/languages/prism/graphql";
import TableSearch from "./TableSearch";
import styled from "styled-components";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("js", js);

export const SET_ACTIVITY = gql`
mutation SetActivity($activity: String!, $done: Boolean!){
  setActivity(activity: $activity, done: $done){
    name
    done
  }
}
`;


export default function GQLTable({
  query,
  options
}) {
  const { data, loading, error, refetch } = useQuery(query,  options);  // {pollInterval: 1000} to refresh data every second.
  const [setActivity, respObj] = useMutation(SET_ACTIVITY);
  console.log("query", query, "options", options);

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
  return (<div>
    <section className="UserProfile">
      <main className="UserProfile-main">
        {
          loading
            ? <p>Loading data...</p>
            : null
        }
        {
          error
            ? <p>ERROR: {JSON.stringify(error)}</p>
            : null
        }
        {
          data && Object.entries(data)
            ? (Object.entries(data).map((k, v) =>
              <Styles>
                <h1> View: {query.definitions[0].name.value} </h1>
                <TableSearch data={k[1]} onSave={
                  (rows) => {
                    console.log("passed", rows);
                    rows && Object.keys(rows).map((activity) => {
                      setActivity({
                        variables: {
                          activity: activity,
                          done: rows[activity] ? true : false
                        }
                      })
                      console.log(respObj);
                    });

                    // Reload data after changes.
                    setTimeout(() => {refetch()}, 1000);
                  }
                }
                />
              </Styles>
            ))
            : (<p>Cannot load data...</p>)
        }
      </main>
    </section>
  </div>);
}
