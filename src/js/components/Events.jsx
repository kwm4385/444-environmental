import React  from 'react'
import { Row, Column } from 'react-foundation'
import { Link } from 'react-router'
import _  from 'underscore'
import EventStore  from '../stores/EventStore.js'
import List  from './List.jsx'
import Section  from './Section.jsx'

export default React.createClass({
  _onChange() {
    this.setState(EventStore.getAll());
  },

  getInitialState() {
    return EventStore.getAll();
  },

  componentDidMount() {
    EventStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    EventStore.removeChangeListener(this._onChange);
  },

  _renderListItem(e) {
    return (
      <Row>
        <Column small={9}>
          {e.title}
        </Column>
        <Column small={3}>
          {e.points} Pts
        </Column>
      </Row>
    );
  },

  eventsFor(list) {
    return <List items={this.state.events} itemRenderer={this._renderListItem}></List>;
  },

  render() {
    return (
      <div style={{height:'100%'}}>
        <div className="row" style={{height:'25px'}}>
          <div className="small-4 large-4 columns e-nav">
            <Link to='/events/popular' className="item"> Popular </Link>
          </div>
          <div className="small-4 large-4 columns e-nav">
            <Link to='/events/MyList' className="item"> My List </Link>
          </div>
          <div className="small-4 large-4 columns e-nav">
            <Link to='/events/all' className="item"> All </Link>
          </div>
        </div>
        <div style={{height:'calc(100% - 45px)'}}>
          {this.eventsFor()}
        </div>
      </div>
    );
  }
});
