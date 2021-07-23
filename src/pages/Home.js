import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { H1, H2 } from '../components/FontStyle';
import { Movie } from '../components/Movie';

const GET_MOVIES_ID = gql`
  query {
    movies {
      id
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_MOVIES_ID);

  return (
    <Container>
      <Header>
        <H1>Apollo Movie</H1>
        <H2>I love GraphQL</H2>
      </Header>
      {loading && <p>loading...</p>}
      {error && <p>error! :(</p>}
      {!loading && data && data.movies.map((movie) => <Movie key={movie.id} id={movie.id} />)}
    </Container>
  );
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  // if (!loading && data) {
  //   console.log(data.movies);
  //   return <Container> 홈을 감싼 컨테이너</Container>;
  // }
}
