import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/Home.jsx';
import Tips from './components/Tips.jsx';
import Leaderboard from './components/Tips.jsx';
import Events from './components/Tips.jsx';

const routes = (
  <Route name='app' path='/' component={ Home }>
     <Route path='/tips' component={ Tips } /> 
     <Route path='/leaderboards' component={ Leaderboard } /> 
     <Route path='/events' component={ Events } /> 
  </Route>
);

export default routes;
