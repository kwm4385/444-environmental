import React  from 'react'
import { Row, Column, Button, Colors, Sizes } from 'react-foundation'
import Section  from './Section.jsx'

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    return (
      <div style={{height:'100%'}}>
        <Row style={{height:'40px'}}>
          <Column small={6} className="e-nav active">
            <span>Tip</span>
          </Column>
          <Column small={6} className="e-nav">
            <span>Event</span>
          </Column>
        </Row>
        <div style={{height:'calc(100% - 60px)'}}>
          <Section style={{height:'100%'}}>

          </Section>
        </div>
      </div>
    );
  }
});
