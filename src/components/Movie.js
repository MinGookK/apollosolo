import React from 'react';
import { Link } from 'react-router-dom';

export const Movie = ({ id }) => {
  return (
    <div>
      <Link to={`/${id}`}>{id}</Link>
    </div>
  );
};
