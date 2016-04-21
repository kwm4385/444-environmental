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
        <Navigation active="events" /> 
        <Section>
          <h1>Events</h1>
        </Section>
      </div>
    );
  }
});
