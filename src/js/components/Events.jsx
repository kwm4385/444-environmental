import React  from 'react'
import Section  from './Section.jsx'
import { Link } from 'react-router'
import Navigation from './Navigation.jsx'

export default React.createClass({
  getInitialState() {
    return {
      selected: 0
    };
  },

  componentDidMount() {
  },

  eventsFor(list) {
    
    let events = Array(16)
      .join(".") // Because Array(16) is [undefined x 16] and join works on that
      .split(".")// but map cant because ^ that is not the same as [undefined, ...]
      .map( (n, i) => {
      return (<tr key={i}>
        <td>Recyle Drive</td>
      </tr>)
    });
    return events;
  },

  render() {
    return (
      <div>
        <Navigation active="events" /> 
        <div>
          <div className="row">
            <div className="small-4 large-4 columns e-nav">
              <Link to='/events/popular' className="item"> Popular </Link>
            </div>
            <div className="small-4 large-4 columns e-nav">
              <Link to='/events/MyList' className="item"> My List </Link>
            </div>
            <div className="small-4 large-4 columns e-nav">
              <Link to='/events/all' className="item"> All </Link>
            </div>
          </div>
        </div>
        <Section>
          <h1>Events</h1>
          <table>
            <tbody>
              {this.eventsFor(this.state.selected)}
            </tbody>
          </table>
        </Section>
      </div>
    );
  }
});
