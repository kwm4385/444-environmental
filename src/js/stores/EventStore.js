import moment  from 'moment'
import assign  from 'object-assign'
import _  from 'underscore'
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
  description: "Bring your dead phones, computers, batteries and more to be recycled!",
  location: "SAU",
  date: moment().add(1, 'days'),
  points: 100,
  id: "gf3fs"
},
{
  title: "Eco Networking",
  description: "Rub shoulders with some seriously green people.",
  location: "Webb Auditorium",
  date: moment().add(3, 'days'),
  points: 75,
  id: "3ghd3"
},
{
  title: "Earth Day Tree Planting",
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
    return {events: events};
  },

  getEvent(id) {
    return _.find(events, function(e) {
      return e.id == id;
    });
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function handleAction(payload) {
    const action = payload.action;

    switch (action.type) {
      // add more cases for other actionTypes...

      // no default
      }
    })
});

export default EventStore;
