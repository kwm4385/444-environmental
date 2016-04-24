import React  from 'react'
import Section  from './Section.jsx'
import Navigation from './Navigation.jsx'
import { Link } from 'react-router'
import List  from './List.jsx'
import TipsStore  from '../stores/TipsStore.js'
import { Row, Column } from 'react-foundation'

export default React.createClass({
  getInitialState() {
    return TipsStore.getAll();
  },

  componentDidMount() {
  },

  _renderTipItem(e) {
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

  tipsFor(list) {
    return <List items={this.state.tips} itemRenderer={this._renderTipItem} linkPrefix='/tips'></List>;
  },

  render() {
    return (
      <div>
        <div className="row" style={{height:'40px'}}>
          <div className="small-4 large-4 columns e-nav active">
            <span>All</span>
          </div>
          <div className="small-4 large-4 columns e-nav">
            <span>Popular</span>
          </div>
          <div className="small-4 large-4 columns e-nav">
            <span>Submitted</span>
          </div>
        </div>
        <div style={{height:'calc(100% - 45px)'}}>
          {this.tipsFor()}
        </div>
      </div>
    );
  }
});
