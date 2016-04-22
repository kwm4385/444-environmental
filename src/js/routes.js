import React  from 'react'
import { Route, IndexRoute } from 'react-router'
import Events  from './components/Events.jsx'
import Home  from './components/Home.jsx'
import Leaderboard  from './components/Leaderboard.jsx'
import Navigation  from './components/Navigation.jsx'
import Tips  from './components/Tips.jsx'

const routes = (
  <Route component={ Navigation }>
    <Route path="/" component={ Home } />
     <Route name='tips' path='tips' component={ Tips } />
     <Route name='leaderboards' path='leaderboards' component={ Leaderboard } />
     <Route name='events' path='events' component={ Events } />
  </Route>
);

export default routes;
