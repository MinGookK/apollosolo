import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { H1, H2 } from '../components/FontStyle';
import { Movie } from '../components/Movie';
import { FlexBoxRow } from '../components/FlexBox';

const GET_MOVIES_ID = gql`
  query {
    movies {
      id
      medium_cover_image
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
      {!loading && data && (
        <FlexBoxRow>
          {data.movies.map((movie) => (
            <>
              <Movie key={movie.id} poster={movie.medium_cover_image} id={movie.id} />
            </>
          ))}
        </FlexBoxRow>
      )}
    </Container>
  );
}
