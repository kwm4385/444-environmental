import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/Home.jsx';
import Tips from './components/Tips.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Events from './components/Events.jsx';

const routes = (
  <Route name='app' path='/' component={ Events }>
     <Route path='/tips' component={ Tips } /> 
     <Route path='/leaderboards' component={ Leaderboard } /> 
     <Route path='/events' component={ Events } /> 
  </Route>
);

export default routes;
