import React  from 'react'
import Navigation  from './Navigation.jsx'
import Section  from './Section.jsx'

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    return (
      <div>
        <Section>
          <h1>Leaderboard</h1>
        </Section>
      </div>
    );
  }
});
