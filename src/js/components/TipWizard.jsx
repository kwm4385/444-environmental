import React  from 'react'
import { Row, Column, Button, Colors, Sizes } from 'react-foundation'
import { Link } from 'react-router'
import ReactWidgets  from 'react-widgets'
import TipsApctionCreators from '../actions/TipsActionCreators'

export default React.createClass({
  getInitialState() {
    return {
      step: 0,
      complete: false,
      title: "",
      points: 100,
      steps: []
    }
  },

  _fieldChange(name, e) {
    let change = {};
    change[name] = e.target.value;
    this.setState(change);
  },

  _forward() {
    if (this.state.step < _.size(this.steps) - 1) {
      this.setState({
        step: this.state.step + 1
      });
    } else {
      this._submit();
    }
  },

  _back() {
    if (this.state.step > 0) {
      this.setState({
        step: this.state.step - 1
      });
    }
  },

  _submit() {
    TipsApctionCreators.createTip(this.state);
    this.setState({
      complete: true
    });
  },

  componentWillMount() {
    this.steps = [
      this._stepOne,
      this._stepTwo,
    ];
  },

  _stepOne () {
    return (
      <div>    
        <Row>
          <Column small={12} style={{marginTop:'10px'}}>
            <label>Tip Name:</label>
            <input type="text" name="title" value={this.state.title} onChange={this._fieldChange.bind(this, 'title')}></input>
            <label>Point Value:</label>
            <input type="text" name="points" value={this.state.points} onChange={this._fieldChange.bind(this, 'points')}></input>
          </Column>
        </Row>
        {this._controls(this.state.title.length > 0)}
      </div>
    );
  },

   _renderSteps () {
    return this.state.steps.map( (tip,i) => {
      return <div key={i}> {i+1}. {tip}</div> 
    });
  },

  _stepTwo() {
    return (<div>
      {this._renderSteps()}
      <input type="text" name="title" key='new' value={this.state.tempStep} onChange={(e) => this.setState({tempStep: e.target.value}) }></input>
      <row>
        <Button onClick={() => this.setState({steps: this.state.steps.concat([this.state.tempStep]), tempStep: ""}) }>Add</Button>
      </row>
      {this._controls(this.state.steps.length > 0)}
    </div>);
  },
  
  _controls(valid) {
    return (
      <Row style={{marginTop:'10px'}}>
        <Column small={6} className="button-col" style={{padding:'0px 10px'}}>
          <Button color={Colors.SECONDARY} disabled={this.state.step <= 0} onClick={this._back}>
            Previous
          </Button>
        </Column>
        <Column small={6} className="button-col" style={{padding:'0px 10px'}}>
          <Button onClick={this._forward} disabled={!valid}>
            {this.state.step < this.steps.length - 1 ? 'Next' : 'Submit'}
          </Button>
        </Column>
      </Row>
    );
  },

  render() {
    if (!this.state.complete) {
      return (
        <div style={{paddingTop:'10px'}}>
          <h1 style={{textAlign:'center'}}>Create Tip</h1>
          {this.steps[this.state.step]()}
        </div>
      );
    } else {
      return (
        <div style={{textAlign:'center', padding:'10px', paddingTop:'20%'}}>
          <h1>Submission Recieved!</h1>
          <p>Thank you for creating a tip! You will be notified when a moderator has approved your submission.</p>
          <Link to='/'><Button color={Colors.SECONDARY}>Return home</Button></Link>
        </div>
      );
    }
  }});
