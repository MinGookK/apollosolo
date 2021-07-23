import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

const GET_MOVIES_ID = gql`
  query {
    movies {
      id
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_MOVIES_ID);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!loading && data) {
    console.log(data.movies);
    return <div>Home</div>;
  }
}
