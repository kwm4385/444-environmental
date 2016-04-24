import moment  from 'moment'
import React  from 'react'
import { Row, Column, Button, Colors, Sizes } from 'react-foundation'
import { Link } from 'react-router'
import ReactWidgets  from 'react-widgets'
import EventActionCreators  from '../actions/EventActionCreators.js'

export default React.createClass({
  getInitialState() {
    return {
      step: 0,
      complete: false,
      title: "",
      description: "",
      location: "",
      date: null
    };
  },

  componentWillMount() {
    this.steps = [
      this._stepOne,
      this._stepTwo,
      this._stepThree
    ];
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
    console.log(this.state);
    const event = {
      title: this.state.title,
      description: this.state.description,
      location: this.state.location,
      date: this.state.date
    }
    EventActionCreators.addEvent(event);
    this.setState({
      complete: true
    });
  },

  _fieldChange(name, e) {
    let change = {};
    change[name] = e.target.value;
    this.setState(change);
  },

  _dateChange(date) {
    this.setState({
      date: moment(date)
    });
  },

  _stepOne() {
    return (
      <div>
        <Row>
          <Column small={12} style={{textAlign:'center', marginTop:'10%'}}>
            <p>Create your own sustainability event in a few easy steps!</p>
          </Column>
        </Row>
        <Row>
          <Column small={12} style={{marginTop:'10px'}}>
            <label>Title:</label>
            <input type="text" name="title" value={this.state.title} onChange={this._fieldChange.bind(this, 'title')}></input>
          </Column>
        </Row>
        {this._controls(this.state.title.length > 0)}
      </div>
    );
  },

  _stepTwo() {
    return (
      <div>
        <Row>
          <Column small={12} style={{textAlign:'center', marginTop:'10%'}}>
            <h1>{this.state.title}</h1>
          </Column>
        </Row>
        <Row>
          <Column small={12} style={{marginTop:'10px'}}>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this._fieldChange.bind(this, 'location')}></input>
          </Column>
        </Row>
        <Row>
          <Column small={12} style={{marginTop:'10px'}}>
            <label>Description:</label>
            <input
              type="textarea"
              name="description"
              value={this.state.description}
              onChange={this._fieldChange.bind(this, 'description')}
              style={{width:'100%', height:'8em'}}></input>
          </Column>
        </Row>
        {this._controls(this.state.description.length > 0 && this.state.location.length > 0)}
      </div>
    );
  },

  _stepThree() {
    return (
      <div>
        <Row>
          <Column small={12} style={{textAlign:'center', marginTop:'10%'}}>
            <h1>{this.state.title}</h1>
          </Column>
        </Row>
        <Row>
          <Column small={12} style={{marginTop:'10px'}}>
            <label>When:</label>
            <ReactWidgets.DateTimePicker min={new Date()} onChange={this._dateChange}/>
          </Column>
        </Row>
        {this._controls(this.state.date)}
      </div>
    );
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
          <h1 style={{textAlign:'center'}}>Create Event</h1>
          {this.steps[this.state.step]()}
        </div>
      );
    } else {
      return (
        <div style={{textAlign:'center', padding:'10px', paddingTop:'20%'}}>
          <h1>Submission Recieved!</h1>
          <p>Thank you for creating an event! You will be notified when a moderator has approved your submission.</p>
          <Link to='/'><Button color={Colors.SECONDARY}>Return home</Button></Link>
        </div>
      );
    }
  }
});
