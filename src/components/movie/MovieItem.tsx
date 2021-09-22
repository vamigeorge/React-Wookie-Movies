import React from 'react';
import { Movie } from '../../core/models/movie';
import { Link } from 'react-router-dom';
import MovieImage from './MovieImage';

interface MovieItemProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  return (
    <Link to={`/detail/${movie.slug}`}>
      <MovieImage poster={movie.poster} />
    </Link>
  );
};

export default MovieItem;
