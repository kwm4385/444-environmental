import React  from 'react'
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
            <p>Hello world!</p>
        </Section>
      </div>
    );
  }
});
