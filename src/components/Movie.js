import React from 'react';
import { Link } from 'react-router-dom';
import { FlexBoxColumn } from './FlexBox';

export const Movie = ({ id, poster }) => {
  return (
    <FlexBoxColumn>
      <Link to={`/${id}`}>
        <img alt="poster" src={poster} />
      </Link>
      <button>좋아요</button>
    </FlexBoxColumn>
  );
};
