import React, {useState} from "react";
import GQLTable from "./GQLTable";

import {ApolloClient, NormalizedCacheObject, ApolloProvider} from "@apollo/client";
import {cache} from "../apolloCache";
import {queries} from "../queries";

let URI = "http://localhost:13001/";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({cache, uri: URI});

const testdata = [
  {
    __typename: "Activity",
    done: 1,
    name: "Building and testing of artifacts in virtual environments",
    dimension: "Build and Deployment",
    subdimension: "Build",
    implementation: [{
      name: "foo",
      __typename: "Implementation"
    }]
  }, {
    __typename: "Activity",
    done: 0,
    name: "Defined build process",
    dimension: "Build and Deployment",
    subdimension: "Build",
    implementation: [{
      name: "foo",
      __typename: "Implementation"
    }]
  }, {
    __typename: "Activity",
    done: 0,
    name: "Signing of artifacts",
    dimension: "Build and Deployment",
    subdimension: "Build",
    implementation: [{
      name: "foo",
      __typename: "Implementation"
    }]
  }
];


const renderQuery = (formData) => {
  var options = {};
  if (formData.done) {
    options = {
      variables: {
        done: formData.done
          ? 1
          : 0
      }
    };
  }
  return (<ApolloProvider client={client}>
    <GQLTable query={queries[formData.name]["query"]} options={options}/>
  </ApolloProvider>);
};


const Demo = (): JSX.Element => {
  const [formData, setFormData] = useState({name: "activities_implementation", filter: ""});


  const InputButton = ({query_name}) => {
    return (<input type="button"
            onClick={() => setFormData({name: query_name, filter: ""})}
            value={query_name}/>
          )
  }

  return (<main className="Demo">
    <div>
      { Object.keys(queries).map((e) =>  {
        return <InputButton query_name={e}/>}) }
      <br/>
    </div>
    {/*<TableSearch data={testdata}/>*/}
     {formData && renderQuery(formData)}
  </main>);
};

export default Demo;
