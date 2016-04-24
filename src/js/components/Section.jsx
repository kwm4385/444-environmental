import React  from 'react'

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    return (
      <div className={"section " + this.props.className} style={this.props.style}>
          {this.props.children}
      </div>
    );
  }
});
