import React  from 'react'
import { Row, Column } from 'react-foundation'
import EventWizard  from './EventWizard.jsx'
import Section  from './Section.jsx'
import TipWizard  from './TipWizard.jsx'

export default React.createClass({
  getInitialState() {
    return {
      showTip: false
    };
  },

  _showTip() {
    this.setState({
      showTip: true
    });
  },

  _showEvent() {
    this.setState({
      showTip: false
    });
  },

  renderWizard() {
    if(this.state.showTip) {
      return <TipWizard/>;
    } else {
      return <EventWizard/>;
    }
  },

  render() {
    return (
      <div style={{height:'100%'}}>
        <Row style={{height:'40px'}}>
          <Column onClick={this._showTip} small={6} className={"e-nav" + (this.state.showTip ? " active" : "")}>
            <span>Tip</span>
          </Column>
          <Column onClick={this._showEvent} small={6} className={"e-nav" + (this.state.showTip ? "" : " active")}>
            <span>Event</span>
          </Column>
        </Row>
        <div style={{height:'calc(100% - 60px)'}}>
          <Section style={{height:'100%'}}>
            {this.renderWizard()}
          </Section>
        </div>
      </div>
    );
  }
});
