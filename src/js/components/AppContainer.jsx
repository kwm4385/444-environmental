import React  from 'react'
import { Router, browserHistory } from 'react-router'
import routes  from '../routes'
import Navigation  from './Navigation.jsx'

export default React.createClass({

renderContent() {
    return (
        <div>
          <Navigation/>
          <div className="page-container">
            <Router history={browserHistory}>
              {routes}
            </Router>
          </div>
        </div>
    );
  },

  render() {
    return this.renderContent();
  }
});
