import React  from 'react'

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    return (
      <div className={"section " + this.props.className}>
          {this.props.children}
      </div>
    );
  }
});
