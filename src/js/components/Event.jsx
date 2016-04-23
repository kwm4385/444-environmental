import moment  from 'moment'
import assign  from 'object-assign'
import React  from 'react'
import { Row, Column, Button, Sizes, Colors } from 'react-foundation'
import Constants  from '../Constants'
import Dispatcher  from '../Dispatcher'
import EventStore  from '../stores/EventStore.js'
import Section  from './Section.jsx'
import { Link } from 'react-router'

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
    console.log(this.props, this.state);
    let e = this.state.event;
    return (
      <div>
        <Row>
          <Column small={2}>
            <Link to="/events"><Button size={Sizes.SMALL} color={Colors.SECONDARY}>Back</Button></Link>
          </Column>
          <Column small={8}>
            <h1>{e.title}</h1>
          </Column>
        </Row>
        <Section className="roomy padded">
          <p className="event-details">{e.description}</p>
          <p className="event-details">{e.location}</p>
          <p className="event-details">{e.date.calendar()}</p>
            <Row className="event-details">
              <Column small={6}>
                <Button size={Sizes.SMALL} color={Colors.SECONDARY}>RSVP</Button>
              </Column>
              <Column small={6}>
                <Button size={Sizes.SMALL}>I'm Here</Button>
              </Column>
            </Row>
        </Section>
      </div>

    );
  }
});
