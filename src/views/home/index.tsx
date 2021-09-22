import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { MainStoreContext } from '../../core/store';
import Movies from '../../components/movie';

const Home: React.FC = () => {
  const { movieStore } = useContext(MainStoreContext);

  const { fetchMovies, loading, genresWithMovies } = movieStore;

  useEffect(() => {
    fetchMovies().catch(console.error);
  }, [fetchMovies]);

  const renderMoviesByGenre = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    return <Movies genresWithMovies={genresWithMovies} />;
  };

  return <main>{renderMoviesByGenre()}</main>;
};

export default observer(Home);
