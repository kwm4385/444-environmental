import React  from 'react'
import { Link } from 'react-router'
import _  from 'underscore'

export default React.createClass({
  getInitialState() {
    return {};
  },

  renderItems(items, itemRenderer, linkPrefix) {
    return _.map(items, function(e, i) {
      return <Link key={i} to={linkPrefix + '/' + e.id}><li>{itemRenderer(e)}</li></Link>;
    });
  },

  render() {
    return (
      <ul className="list">{this.renderItems(this.props.items, this.props.itemRenderer, this.props.linkPrefix)}</ul>
    );
  }
});
