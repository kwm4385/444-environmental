import React  from 'react'
import { Row, Column, Button, Colors, Sizes } from 'react-foundation'
import _  from 'underscore'

export default React.createClass({
  getInitialState() {
    return {
      step: 0,
      title: "",
      description: "",
      location: "",
      date: null,
      points: 0
    };
  },

  componentWillMount() {
    this.steps = [
      this._stepOne(),
      <p>2</p>
    ];
  },

  _forward() {
    if (this.state.step < _.size(this.steps) - 1) {
      this.setState({
        step: this.state.step + 1
      });
    }
  },

  _back() {
    if (this.state.step > 0) {
      this.setState({
        step: this.state.step - 1
      });
    }
  },

  _fieldChange(name, e) {
    let change = {};
    change[name] = e.target.value;
    this.setState(change);
  },

  _stepOne() {
    return (
      <div>
        <Row>
          <Column small={12} style={{textAlign:'center', marginTop:'20%'}}>
            <p>Create your own sustainability event in a few easy steps!</p>
          </Column>
        </Row>
        <Row>
          <Column small={12} style={{marginTop:'10px'}}>
            <label>Title:</label>
            <input type="text" name="title" onChange={this._fieldChange.bind(this, 'title')}></input>
          </Column>
        </Row>
      </div>
    );
  },

  render() {
    return (
      <div>
        {this.steps[this.state.step]}
        <Row style={{marginTop:'10px'}}>
          <Column small={6} className="button-col" style={{padding:'0px 10px'}}>
            <Button color={Colors.SECONDARY} disabled={this.state.step <= 0} onClick={this._back}>
              Previous
            </Button>
          </Column>
          <Column small={6} className="button-col" style={{padding:'0px 10px'}}>
            <Button onClick={this._forward}>
              {this.state.step < _.size(this.steps) - 1 ? 'Next' : 'Finish'}
            </Button>
          </Column>
        </Row>
      </div>
    );
  }
});
