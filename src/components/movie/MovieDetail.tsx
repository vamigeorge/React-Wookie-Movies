import React from 'react';
import {
  MovieCast,
  MovieDetails,
  MovieOtherInfo,
  MovieOverview,
  MovieTitleRating,
  MovieTopDetails,
} from './styles';
import { Movie } from '../../core/models/movie';
import StarRating from './StarRating';

interface MovieDetailProps {
  selectedMovie: Movie;
}

const getYearFromData = (date: string) => new Date(date).getFullYear();

const MovieDetail: React.FC<MovieDetailProps> = ({ selectedMovie }) => {
  return (
    <MovieDetails>
      <MovieTopDetails>
        <MovieTitleRating>
          {selectedMovie.title} ({selectedMovie.imdb_rating})
        </MovieTitleRating>
        <StarRating rating={selectedMovie.imdb_rating} />
      </MovieTopDetails>
      <MovieOtherInfo>
        {getYearFromData(selectedMovie.released_on)} | {selectedMovie.length} |{' '}
        {selectedMovie.director}
      </MovieOtherInfo>
      <MovieCast>cast: {selectedMovie.cast.join(', ')}</MovieCast>
      <MovieOverview>{selectedMovie.overview}</MovieOverview>
    </MovieDetails>
  );
};

export default MovieDetail;
