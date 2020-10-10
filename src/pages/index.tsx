import React from 'react';
import {
  QueryResult,
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://vkcnm7r1rh.execute-api.eu-west-1.amazonaws.com/dev/graphql', // TODO: inject this in a pipeline
  cache: new InMemoryCache()
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
