import React from 'react';

import { MovieImage as MovieImageContainer } from './styles';

interface MovieImageProps {
  poster: string;
}

const MovieImage: React.FC<MovieImageProps> = ({ poster }) => {
  return <MovieImageContainer src={poster} alt="Movie poster" />;
};

export default MovieImage;
