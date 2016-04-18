import React from 'react';

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    return (
      <nav className="top-bar app-menu-bar" id="nav-menu">
        <div className="top-bar-left">
          <ul className="vertical medium-horizontal menu">
            <li className="app-menu-item"><a href="#">Home</a></li>
            <li className="app-menu-item"><a href="#">Tips</a></li>
            <li className="app-menu-item"><a href="#">Leaderboards</a></li>
            <li className="app-menu-item"><a href="#">Events</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});
