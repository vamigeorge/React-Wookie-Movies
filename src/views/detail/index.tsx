import React, { useContext, useEffect } from 'react';
import { MainStoreContext } from '../../core/store';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Movie } from './styles';

import MovieDetail from '../../components/movie/MovieDetail';
import MovieImage from '../../components/movie/MovieImage';

const Detail = () => {
  const { slug = '' } = useParams();

  const { movieStore } = useContext(MainStoreContext);
  const { selectedMovie, movieBySlug, loading } = movieStore;

  useEffect(() => {
    movieBySlug(slug).catch(console.error);
  }, [movieBySlug, slug]);

  const renderMovieDetails = () => {
    if (loading || !selectedMovie) {
      return <div>Loading...</div>;
    }

    return (
      <Movie>
        <MovieImage poster={selectedMovie.poster} />
        <MovieDetail selectedMovie={selectedMovie} />
      </Movie>
    );
  };

  return <React.Fragment>{renderMovieDetails()}</React.Fragment>;
};

export default observer(Detail);
