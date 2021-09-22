import React from 'react';
import './App.css';
import { observer } from 'mobx-react-lite';
import Layout from './components/layout';
import Routes from './Routes';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
};

export default observer(App);
