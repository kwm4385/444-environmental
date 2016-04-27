import moment  from 'moment'
import assign  from 'object-assign'
import Constants  from '../Constants'
import Dispatcher  from '../Dispatcher'
import BaseStore  from './BaseStore'

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for( var i=0; i < 5; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

// hardcode some starting data
let events = [{
  title: "Electronics Recycling Drive",
  pending: false,
  description: "Bring your dead phones, computers, batteries and more to be recycled!",
  location: "SAU",
  date: moment().add(1, 'days'),
  points: 100,
  id: "gf3fs"
},
{
  title: "Eco Networking",
  pending: false,
  description: "Rub elbows with some seriously green people.",
  location: "Webb Auditorium",
  date: moment().add(3, 'days'),
  points: 75,
  id: "3ghd3"
},
{
  title: "Earth Day Tree Planting",
  pending: true,
  description: "Come plant free trees for Earth Day!",
  location: "Outside",
  date: moment().add(7, 'days'),
  points: 150,
  id: "oq4fv"
}];

// Facebook style store creation.
const EventStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getAll() {
    return { events: _.filter(events, (t) => !t.pending) };
  },

  getEvent(id) {
    return _.find(events, function(e) {
      return e.id == id;
    });
  },

  getPending() {
    return { events: _.filter(events, (t) => t.pending) };
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function handleAction(payload) {
    const action = payload.action;

    switch (action.type) {
      // add more cases for other actionTypes...
      case Constants.ActionTypes.EVENT_ADDED:
        const event = action.event;
        event.id = makeid();
        event.pending = true;
        events.push(event);
        break;
      case Constants.ActionTypes.EVENT_APPROVE:
        {
          let tipa = _.find(events, t => t.id == action.event);
          tipa.pending = false;
        } break;
      }
    })
});

export default EventStore;
