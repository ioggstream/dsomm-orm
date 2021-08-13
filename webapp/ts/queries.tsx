/**
 * A set of predefined queries.
 */
import {gql} from "@apollo/client";

export const queries = {
    activities_implementation: {
      query: gql `
        query ActivitiesImplementation($done: Int) {
          activities(done: $done) {
            done
            name
            dimension
            subdimension
            implementation {
              name
              topics
              tags
            }
          }
        }
      `,
      options: {
        variables: {}
      }
    },

    activities: {
      query: gql `
        query Activities($done: Int) {
          activities(done: $done) {
            done
            name
            dimension
            subdimension
          }
        }
      `,
      options: {
        variables: {}
      }
    },
    dimensions: {
      query: gql `
        query Dimensions {
          dimension {
            name
          }
        }
      `,
      options: {}
    },
    dimensions_maturity: {
      query: gql `
        query DimensionsMaturity {
          maturity {
            dimension
            level
            score
          }
        }
      `,
      options: {}
    },
    implementations: {
      query: gql `
        query Implementations($name: String) {
          implementations(name: $name) {
            name
            url
            topics
            tags
          }
        }
      `,
      options: {}
    }
  };
