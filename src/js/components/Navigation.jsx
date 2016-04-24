import React  from 'react'
import { Link } from 'react-router'
import Leaderboard  from './Leaderboard.jsx'

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    // Not the right way to do this, but it works?
    let active = {
      home: "item" + ( this.props.location.pathname == "/" ? " active" : "" ),
      tips: "item" + ( this.props.location.pathname == "/tips" ? " active" : "" ),
      leaderboard: "item" + ( this.props.location.pathname == "/leaderboards" ? " active" : "" ),
      events: "item" + ( this.props.location.pathname == "/events" ? " active" : "" ),
    };
    return (
      <div>
        <div className="icon-bar four-up">
          <Link to='/' className={active['home']}>
            <img src="/images/Dashboard32x32.png" />
            <label>Home</label>
          </Link>
          <Link to='/tips' className={active['tips']}>
            <img src="/images/Tips32x32.png" />
            <label>Tips</label>
          </Link>
          <Link to='/leaderboards' className={active['leaderboard']}>
            <img src="/images/Leaderboard32x32.png" />
            <label>Leaderboard</label>
          </Link>
          <Link to='/events' className={active['events']}>
            <img src="/images/Events32x32.png" />
            <label>Events</label>
          </Link>
        </div>

        <div className="page-container">
          {this.props.children}
        </div>
      </div>
    );
  }
});
