import React from 'react';
import { Link } from 'react-router-dom';
import { FlexBoxColumn } from './FlexBox';
import { gql, useMutation } from '@apollo/client';

const LIKE_MOVIE = gql`
  mutation likeMovie($id: Int!) {
    likeMovie(id: $id) @client
  }
`;

export const Movie = ({ id, poster, isLiked }) => {
  const [toggleLikeMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: +id },
  });

  return (
    <FlexBoxColumn>
      <Link to={`/${id}`}>
        <img alt="poster" src={poster} />
      </Link>
      <button onClick={isLiked ? null : toggleLikeMovie}>{isLiked ? 'unlike' : 'like'}</button>
    </FlexBoxColumn>
  );
};
