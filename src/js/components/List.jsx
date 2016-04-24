import React  from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState() {
    return {};
  },

  renderItems(items, itemRenderer, linkPrefix) {
    return _.map(items, function(e, i) {
      console.log(linkPrefix);
      if (linkPrefix) {
        return <Link key={i} to={linkPrefix + '/' + e.id}><li>{itemRenderer(e)}</li></Link>;
      } else {
        return <li key={i}>{itemRenderer(e)}</li>;
      }
    });
  },

  render() {
    return (
      <ul className="list">{this.renderItems(this.props.items, this.props.itemRenderer, this.props.linkPrefix)}</ul>
    );
  }
});
