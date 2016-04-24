import React  from 'react'
import { Row, Column } from 'react-foundation'
import { Link } from 'react-router'
import _  from 'underscore'
import UserStore  from '../stores/UserStore.js'
import List  from './List.jsx'
import Section  from './Section.jsx'

export default React.createClass({
  _onChange() {
    this.setState(EventStore.getAll());
  },

  getInitialState() {
    return UserStore.getAll();
  },

  componentDidMount() {
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange);
  },

  _renderListItem(u) {
    return (
      <Row>
        <Column small={7}>
          {u.name}
        </Column>
        <Column small={5}>
          {u.points} Points
        </Column>
      </Row>
    );
  },

  render() {
    return (
      <div style={{height:'calc(100% - 25px)'}}>
        <List items={_.sortBy(this.state.users, 'points').reverse()} itemRenderer={this._renderListItem}></List>
      </div>
    );
  }
});
