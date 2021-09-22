import { configure } from 'mobx';
import MovieStore from './MovieStore';
import React from 'react';

configure({ enforceActions: 'always' });

export class MainStore {
  movieStore: MovieStore;
  constructor() {
    this.movieStore = new MovieStore();
  }
}

export const MainStoreContext = React.createContext(new MainStore());
