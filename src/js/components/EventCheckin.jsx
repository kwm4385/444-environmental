import moment  from 'moment'
import assign  from 'object-assign'
import React  from 'react'
import { Row, Column, Button, Sizes, Colors } from 'react-foundation'
import { Link } from 'react-router'
import Constants  from '../Constants'
import Dispatcher  from '../Dispatcher'
import EventStore  from '../stores/EventStore.js'
import QRReader  from './QRReader.jsx'
import Section  from './Section.jsx'

export default React.createClass({
  _onChange() {
    this.setState(EventStore.getEvent(this.props.params.eventId));
  },

  getInitialState() {
    return {
      event: EventStore.getEvent(this.props.params.eventId),
      scanned: false
    };
  },

  componentDidMount() {
    EventStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    EventStore.removeChangeListener(this._onChange);
  },

  onQRRead(data) {
    console.log(data);
    this.setState({
      scanned: true
    });
  },

  renderContent() {
    let e = this.state.event;
    if (!this.state.scanned) {
      return (
        <div>
          <Row className="event-details">
            <Column small={12} style={{textAlign:'center'}}>
              <h2>Scan the event QR code</h2>
            </Column>
          </Row>
          <Row className="event-details">
            <Column small={12} style={{textAlign:'center'}}>
              <QRReader onRead={this.onQRRead}/>
            </Column>
          </Row>
        </div>
      );
    } else {
      return (
        <Row className="event-details">
          <Column small={12} style={{textAlign:'center'}}>
            <h2>Submission Recieved!</h2>
            <p>You've recieved {e.points} points!</p>
            <Link to="/">
              <Button size={Sizes.SMALL}>Okay</Button>
            </Link>
          </Column>
        </Row>
      );
    }
  },

  render() {
    return (
      <div>
        <Row>
          <Column style={{textAlign:'center'}} small={12}>
            <h1>{this.state.event.title}</h1>
          </Column>
        </Row>
        <Section className="roomy padded">
          {this.renderContent()}
        </Section>
      </div>
    );
  }
});
