import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/home';
import Detail from './views/detail';
import { observer } from 'mobx-react-lite';
import NotFound from './views/not-found';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/detail/:slug">
        <Detail />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
