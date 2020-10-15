import React from 'react';
import {
  QueryResult,
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql,
  UriFunction,
} from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.GATSBY_APOLLO_URL, // Needs to be prefixed with "GATSBY_" to use here
  cache: new InMemoryCache(),
});

const GRAPHQL_QUERY = gql`
  query {
    hello
    nodeVersion
  }
`;

function HelloQueryCall(): JSX.Element {
  const { loading, error, data }: QueryResult = useQuery(GRAPHQL_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <p>
        Message from GraphQL: <strong>{data.hello}</strong>
      </p>
      <p>
        Node Version: <strong>{data.nodeVersion}</strong>
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <h2>AWS S3 Static Site with GraphQL Lambda Backend</h2>
      <ApolloProvider client={client}>
        <HelloQueryCall />
      </ApolloProvider>
    </div>
  );
}
