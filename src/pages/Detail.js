import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { Container } from '../components/Container';
import { H1 } from '../components/FontStyle';

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) { 
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

export default function Detail() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: +id }, 
  });

  // console.log(data);

  return (
    <Container>
      {loading && <p>loading...</p>}
      {error && <p>error :(</p>}
      {!loading && data && (
        <>
          <H1>{data.movie.title}</H1>
          <img alt="poster" src={data.movie.medium_cover_image} />
          <p>{data.movie.description_intro}</p>
        </>
      )}
    </Container>
  );
}
