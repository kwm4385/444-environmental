import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './components/Navigation.jsx';

const routes = (
  <Route name='app' path='/' component={ Navigation }>

  </Route>
);

export default routes;
