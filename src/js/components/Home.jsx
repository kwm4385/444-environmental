import React  from 'react'
import { Row, Column, Button, Colors, Sizes } from 'react-foundation'
import { Link } from 'react-router'
import EventStore  from '../stores/EventStore.js'
import TipsStore  from '../stores/TipsStore.js'
import Navigation  from './Navigation.jsx'
import Section  from './Section.jsx'
import md5 from 'md5'

export default React.createClass({
  _onChange() {
    this.setState({events: EventStore.getAll()});
  },

  getInitialState() {
    return {
      events: EventStore.getAll(),
      tip: TipsStore.frontPageTip()
    }
  },

  componentDidMount() {
    EventStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    EventStore.removeChangeListener(this._onChange);
  },

  renderEvents() {
    let events = _.first(_.sortBy(this.state.events.events, 'date'), 2);
    return _.map(events, function(e, i) {
      return (
        <Row key={i} className="highlight roomy">
          <Column small={6}>
            <span className="vert-text">{e.title}</span>
          </Column>
          <Column small={3}>
            <span className="vert-text">{e.date.fromNow()}</span>
          </Column>
          <Column small={3} className="button-col">
            <Link to={'events/' + e.id}>
              <Button size={Sizes.SMALL} color={Colors.SECONDARY}>Details</Button>
            </Link>
          </Column>
        </Row>
      );
    });
  },

  render() {
    return (
      <div>
        <Section noPadding>
          <Row>
            <Column small={3} className="pic-col">
              <img className="profile-pic" src={"http://www.gravatar.com/avatar/" + md5("timbrook480@gmail.com") + "?s=600"} />
            </Column>
            <Column small={5}>
              <h1>John Doe</h1>
              <p className="info">
                Level 35<br/>
                XP: 35600 Points
              </p>
            </Column>
            <Column small={4} className="button-col">
              <Link to="/mod/events">
                <Button className="mod-button">Mod Tools</Button>
              </Link>
            </Column>
          </Row>
        </Section>

        <Section>
          <h1>Tip of the Day</h1>
          <p>{this.state.tip.title}</p>
        </Section>

        <Section>
          <h1>Your Next Events</h1>
          <div className="section-inner">
            {this.renderEvents()}
            <Row>
              <Column small={3} offsetOnSmall={9} className="button-col">
                <Link to='events/'><Button size={Sizes.SMALL}>All Events</Button></Link>
              </Column>
            </Row>
          </div>
        </Section>

        <Section>
          <Row>
            <Column small={12} className="block-col">
              <Link to="/create">
                <Button className="block-button">
                  <img className="button-icon" src="/images/AddTipEvent.png"/>
                  Add Tip/Event
                </Button>
              </Link>
            </Column>
         </Row>
        </Section>
      </div>
    );
  }
});
