import React  from 'react'
import { Row, Column, Button, Colors } from 'react-foundation'
import Navigation  from './Navigation.jsx'
import Section  from './Section.jsx'

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    return (
      <div>
        <Section>
          <Row>
            <Column small={3} className="pic-col">
              <img className="profile-pic" src="/images/profile.jpg" />
            </Column>
            <Column small={5}>
              <h1>John Doe</h1>
              <p className="info">
                Level 35<br/>
                XP: 35600 Points
              </p>
            </Column>
            <Column small={4} className="button-col">
              <Button className="mod-button">Mod Tools</Button>
            </Column>
          </Row>
        </Section>
        <Section>
          <h1>Tip of the Day</h1>
          <p>Carousel goes here</p>
        </Section>
        <Section>
          <Row>
            <Column small={6} className="block-col">
              <Button className="block-button">
                <p className="button-symbol">+</p>
                Add Tip/Event
              </Button>
            </Column>
            <Column small={6} className="block-col">
              <Button className="block-button">
                <p className="button-symbol">&#x2611;</p>
                Verify Tip/Event
              </Button>
            </Column>
          </Row>
        </Section>
      </div>
    );
  }
});
