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
        <Navigation active="home" /> 
        <Section>
          <h1>Tip of the Day</h1>
          <p>Carousel goes here</p>
        </Section>
      </div>
    );
  }
});
