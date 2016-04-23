import React  from 'react'

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    console.log(this.props);
    return (
      <p>{this.props.params.eventId}</p>
    );
  }
});
