import { action, computed, observable, runInAction } from 'mobx';
import { GenreWithMovies, Movie } from '../models/movie';
import axios from '../api';

export default class MovieStore {
  @observable loading = false;
  @observable movies: Movie[] = [];
  @observable selectedMovie: Movie | undefined;
  @observable isSearching: boolean = false;

  @computed get genresWithMovies(): GenreWithMovies[] {
    return this.extractGenres.map((genre: string) => {
      const moviesForGenre =
        this.movies.filter((movie: Movie) => movie.genres.includes(genre)) || [];
      return {
        name: genre,
        movies: moviesForGenre,
      };
    });
  }

  @computed get extractGenres(): string[] {
    return Array.from(new Set(this.movies.flatMap((movie: Movie) => movie.genres)));
  }

  @action movieBySlug = async (slug: string) => {
    if (this.isSearching) {
      return;
    }
    this.loading = true;
    if (!this.movies.length) {
      try {
        const response = await axios.get(`/movies/${slug}`);
        runInAction('fetched movie by slug', () => {
          const { data: movie } = response;
          this.selectedMovie = movie;
          this.loading = false;
        });
      } catch (err) {
        this.loading = false;
      }
    } else {
      runInAction('found movie by slug', () => {
        const movie = this.movies.find((movie: Movie) => movie.slug === slug);
        this.selectedMovie = movie;
        this.loading = false;
      });
    }
  };

  @action searchMovie = async (query: string = '') => {
    this.isSearching = true;
    this.loading = true;
    try {
      const response = await axios.get(`/movies?q=${query.toLowerCase().trim()}`);
      runInAction('found movie by query', () => {
        const { movies } = response.data;
        this.movies = movies;
        this.loading = false;
        this.isSearching = false;
      });
    } catch (err) {
      this.loading = false;
      this.isSearching = false;
    }
  };

  @action fetchMovies = async () => {
    if (this.isSearching) {
      return;
    }
    this.loading = true;
    try {
      const response = await axios.get('/movies');
      runInAction('fetch movies', () => {
        const { movies } = response.data;
        this.movies = movies;
        this.loading = false;
      });
    } catch (err) {
      this.loading = false;
    }
  };
}
