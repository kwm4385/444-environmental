import React  from 'react'
import Section  from './Section.jsx'
import Navigation from './Navigation.jsx'

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    return (
      <div>
        <Navigation active="leaderboard" /> 
        <Section>
          <h1>Leaderboard</h1>
        </Section>
      </div>
    );
  }
});
