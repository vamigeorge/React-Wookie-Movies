import React, { ReactNode } from 'react';
import { GenreWithMovies, Movie } from '../../core/models/movie';
import styled from 'styled-components';
import MovieItem from './MovieItem';

interface MoviesProps {
  genresWithMovies: GenreWithMovies[];
  children?: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const GenreItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const GenreName = styled.p`
  font-size: 2em;
  font-weight: 200;
  padding: 0.5em;
`;

const MovieList = styled.div`
  display: flex;
  overflow-y: scroll;
`;

const Movies: React.FC<MoviesProps> = ({ genresWithMovies }) => {
  return (
    <Container>
      {genresWithMovies.map((genre: GenreWithMovies, index: number) => {
        return (
          <GenreItem key={index}>
            <GenreName>{genre.name}</GenreName>
            <MovieList>
              {genre.movies.map((movie: Movie) => (
                <MovieItem key={movie.id} movie={movie} />
              ))}
            </MovieList>
          </GenreItem>
        );
      })}
    </Container>
  );
};

export default Movies;
