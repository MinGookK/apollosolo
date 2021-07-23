import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GET_MOVIE_DETAIL = gql`
  query getMovieDetail($id: Int!) {
    movie(id: $id) {
      id
      title
      rating
      language
      description_intro
    }
  }
`;

export default function Detail() {
  const { id } = useParams();
  console.log(id);

  const { loading, error, data } = useQuery(GET_MOVIE_DETAIL, {
    variables: { id },
  });

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  if (!loading && data) {
    console.log(data);
    return <p>success!</p>;
  }
}
