import React  from 'react'
import { Router, browserHistory } from 'react-router'
import routes  from '../routes'
import Navigation  from './Navigation.jsx'

export default React.createClass({

renderContent() {
    return (
      <Router history={browserHistory}>
        {routes}
      </Router>
    );
  },

  render() {
    return this.renderContent();
  }
});
