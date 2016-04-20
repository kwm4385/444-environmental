import React  from 'react'

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    return (
      <div className="icon-bar four-up">
        <a className="item">
          <img src="placeholder" />
          <label>Home</label>
        </a>
        <a className="item">
          <img src="placeholder" />
          <label>Tips</label>
        </a>
        <a className="item">
          <img src="placeholder" />
          <label>Leaderboards</label>
        </a>
        <a className="item">
          <img src="placeholder" />
          <label>Events</label>
        </a>
      </div>

    );
  }
});
