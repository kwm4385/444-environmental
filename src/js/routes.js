import React  from 'react'
import { Route, IndexRoute } from 'react-router'
import Create  from './components/Create.jsx'
import Event  from './components/Event.jsx'
import Events  from './components/Events.jsx'
import Home  from './components/Home.jsx'
import Leaderboard  from './components/Leaderboard.jsx'
import Navigation  from './components/Navigation.jsx'
import Tip  from './components/Tip.jsx'
import Tips  from './components/Tips.jsx'
import ModTools  from './components/ModTools.jsx'

const routes = (
  <Route component={ Navigation }>
    <Route path="/" component={ Home } />
     <Route name='tips' path='tips' component={ Tips } />
     <Route name='tip' path='tips/:tipId' component={ Tip } />
     <Route name='leaderboards' path='leaderboards' component={ Leaderboard } />
     <Route name='events' path='events' component={ Events }/>
     <Route name='event' path='events/:eventId' component={ Event } />
     <Route name='mod' path='/mod' component={ ModTools }/>
     <Route name='mod' path='/mod/:type' component={ ModTools }/>
  </Route>
);

export default routes;
