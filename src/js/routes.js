import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/Home.jsx';

const routes = (
  <Route name='app' path='/' component={ Home }>

  </Route>
);

export default routes;
