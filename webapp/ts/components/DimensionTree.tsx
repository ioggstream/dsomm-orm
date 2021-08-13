/* eslint-disable*/
import React, {useState} from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/graphql';
import TableSearch from './TableSearch';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('js', js);

export const GET_DIMENSIONS = gql`
  query DimensionCount {
    dimension {
      name
      count
      subdimensions {
        name
        count
        activities {
          name
          done
        }
      }
    }
  }
`;


const MyTable = () => {
  const [updated, setUpdate] = useState(false);
  const {
    data,
    loading,
    error,
    refetch
  } = useQuery(GET_DIMENSIONS);

    return (
      <div>
      <section className="UserProfile">
          <main className="UserProfile-main">
              {loading ? <p>Loading data...</p> : null}
              {error ? <p>ERROR: {JSON.stringify(error)}</p> : null}
              {data && data.dimension
              ? <TableSearch data={data.dimension} />
              : <p>Sign up...</p>}
          </main>
      </section>
    </div>
    );
};

export default MyTable;
