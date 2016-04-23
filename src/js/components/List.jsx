import React  from 'react'
import _  from 'underscore'

export default React.createClass({
  getInitialState() {
    return {};
  },

  renderItems(items, itemRenderer) {
    return _.map(items, function(e, i) {
      return <li key={i}>{itemRenderer(e)}</li>;
    });
  },

  render() {
    return (
      <ul className="list">{this.renderItems(this.props.items, this.props.itemRenderer)}</ul>
    );
  }
});
