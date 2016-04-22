import React  from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    // Not the right way to do this, but it works?
    let active = {
      home: "item" + ( this.props.active == "home" ? " active" : "" ),
      tips: "item" + ( this.props.active == "tips" ? " active" : "" ),
      leaderboard: "item" + ( this.props.active == "tips" ? " active" : "" ),
      events: "item" + ( this.props.active == "tips" ? " active" : "" ),
    };
    return (
      <div>
        <div className="icon-bar four-up">
          <Link to='/' className={active['home']}>
            <img src="placeholder" />
            <label>Home</label>
          </Link>
          <Link to='/tips' className={active['tips']}>
            <img src="placeholder" />
            <label>Tips</label>
          </Link>
          <Link to='/leaderboards' className={active['leaderboard']}>
            <img src="placeholder" />
            <label>Leaderboards</label>
          </Link>
          <Link to='/events' className={active['events']}>
            <img src="placeholder" />
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
