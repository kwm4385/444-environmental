import React  from 'react'
import { Row, Column, Button, Colors, Sizes } from 'react-foundation'

export default React.createClass({
  getInitialState() {
    return {
      step: 0
    };
  },

  componentWillMount() {
    this.steps = [
      this._stepOne()
    ];
  },

  _stepOne() {
    return (
      <Row>
        <Column small={12} style={{textAlign:'center', marginTop:'20%'}}>
          <p>Create your own sustainability event in a few easy steps!</p>
        </Column>
      </Row>
    );
  },

  render() {
    return this.steps[this.state.step];
  }
});
