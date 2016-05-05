import React  from 'react'
import { Row, Column, Button } from 'react-foundation'
import { Link } from 'react-router'
import EventStore  from '../stores/EventStore.js'
import TipsStore  from '../stores/TipsStore.js'
import List  from './List.jsx'
import Section  from './Section.jsx'
import EventActionCreators from '../actions/EventActionCreators';
import TipsActionCreators from '../actions/TipsActionCreators';

export default React.createClass({
  _onChange() {
    this.setState({ 
      events: EventStore.getPending(),
      tips: TipsStore.getPending(),
    });
  },

  getInitialState() {
    return {
      events: EventStore.getPending(),
      tips : TipsStore.getPending(),
    };
  },

  componentDidMount() {
    EventStore.addChangeListener(this._onChange);
    TipsStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    EventStore.removeChangeListener(this._onChange);
    TipsStore.removeChangeListener(this._onChange);
  },

  _renderListItem(e) {
    return (
      <Row>
        {e.title}
      </Row>
    );
  },

  eventsFor(list) {
    return <List items={this.state.events.events} itemRenderer={this._renderListItem} linkPrefix="/mod/events"></List>;
  },

  tipsFor(list) {
    return <List items={this.state.tips.tips} itemRenderer={this._renderListItem} linkPrefix="/mod/tips"></List>;
  },

  render() {
    let list;
    if (this.props.params.type === "events") {
      list = this.eventsFor();
    } else if (this.props.params.type === "tips") {
      list = this.tipsFor(); 
    }
    return (
      <div style={{height:'100%'}}>
        <div className="row" style={{height:'40px'}}>
         <div className="small-6 large-6 columns e-nav">
            <Link to="/mod/events">
              <span>Pending Events</span>
            </Link>
          </div>
          <div className="small-6 large-6 columns e-nav">
            <Link to="/mod/tips">
              <span>Pending Tips</span>
            </Link>
          </div>
        </div>
        <div style={{height:'calc(100% - 60px)'}}>
          {list}
        </div>
      </div>
    );
  }
});
