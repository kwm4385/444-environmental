import moment  from 'moment'
import assign  from 'object-assign'
import React  from 'react'
import { Row, Column, Button, Sizes, Colors } from 'react-foundation'
import { Link } from 'react-router'
import Constants  from '../Constants'
import Dispatcher  from '../Dispatcher'
import TipsStore  from '../stores/TipsStore.js'
import List  from './List.jsx'
import Section  from './Section.jsx'

export default React.createClass({

  _onChange() {
    this.setState(TipsStore.getEvent(this.props.params.tipId));
  },

  getInitialState() {
    return {
      tip: TipsStore.getTip(this.props.params.tipId)
    };
  },

  componentDidMount() {
    TipsStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    TipsStore.removeChangeListener(this._onChange);
  },

  _renderCheckListItem(item) {
    return (
      <div>{item.objective}</div>
    );
  },

  render() {
    console.log(this.props, this.state);
    let e = this.state.tip;
    return (
      <div>
        <Row>
          <Column small={8}>
            <h1>{e.title}</h1>
          </Column>
        </Row>
          <Section className="roomy padded">
            <List items={e.steps} itemRenderer={this._renderCheckListItem} linkPrefix=''></List>;
          </Section>
      </div>
    );
  }
});
