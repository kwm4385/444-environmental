import moment  from 'moment'
import assign  from 'object-assign'
import React  from 'react'
import { Row, Column, Button, Sizes, Colors, Callout } from 'react-foundation'
import { Link } from 'react-router'
import Constants  from '../Constants'
import Dispatcher  from '../Dispatcher'
import Event from './Event.jsx'
import Tip from './Tip.jsx'

export default React.createClass({

  getInitialState() {
    return {
      feedback: false,
      sentFeedback: false
    };  
  },

  componentDidMount() {

  },

  componentWillUnmount() {
    
  },
  
  feedback() {
    console.log(this.state);
    this.setState({sentFeedback: true});
  },

  approve() {

  },

  deny() {
    this.setState({feedback: true});
  },

  _renderButtons() {
    if (this.state.sentFeedback) {
      return (<div>Your feedback has been sent</div>);
    }
    else if (this.state.feedback) {
      return (<div style={{overflow: "hidden"}}>
	<textarea rows="10" placeholder="Please leave feedback"></textarea>
	<Button onClick={this.feedback} style={{float: "right"}}>Submit</Button>
      </div>);
    } else {
      return (<Row>
        <Column small={6}>
          <Button>Approve</Button>
        </Column>
        <Column small={6}>
          <Button onClick={this.deny} color={Colors.ALERT}>Deny</Button>
        </Column>
      </Row>); 
    }
  },

  render() {
      let modContent;
      switch (this.props.params.type) {
	case "events":
	  modContent = (<Event params={{ eventId: this.props.params.id }} />);
	  break;
	case "tips":
	  modContent = (<Tip params={{ tipId: this.props.params.id }} />);
	  break;
      }
      return (<div>
	<Callout color={Colors.ALERT}>
	  <h5>You Are Moderating This Content</h5>
	</Callout>
	{modContent}
	<Callout color={Colors.PRIMARY}>
	  {this._renderButtons()}
	</Callout>
      </div>);
    }
});


