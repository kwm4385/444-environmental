import moment  from 'moment'
import assign  from 'object-assign'
import React  from 'react'
import { Row, Column, Button, Sizes, Colors } from 'react-foundation'
import { Link } from 'react-router'
import Constants  from '../Constants'
import Dispatcher  from '../Dispatcher'
import EventStore  from '../stores/EventStore.js'
import Section  from './Section.jsx'

export default React.createClass({
  _onChange() {
    this.setState(EventStore.getEvent(this.props.params.eventId));
  },

  getInitialState() {
    return {
      event: EventStore.getEvent(this.props.params.eventId)
    };
  },

  componentDidMount() {
    EventStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    EventStore.removeChangeListener(this._onChange);
  },

  render() {
    let e = this.state.event;
    return (
      <div>
        <Row>
          <Column style={{textAlign:'center'}} small={12}>
            <h1>{e.title}</h1>
          </Column>
        </Row>
        <Section className="roomy padded">
          <Row className="event-details">
            <Column small={12} style={{textAlign:'center'}}>
              <h2>Scan the event QR code</h2>
            </Column>
          </Row>
            <Row className="event-details">
              <Column small={12} style={{textAlign:'center'}}>
                SCANNER
              </Column>
            </Row>
        </Section>
      </div>
    );
  }
});
