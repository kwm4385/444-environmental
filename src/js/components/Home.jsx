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
      <div className="page-container">
        <Section>
          <h1>Tip of the Day</h1>
          <p>Carousel goes here</p>
        </Section>
      </div>
    );
  }
});
