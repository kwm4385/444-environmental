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
let users = [{
  name: "John Doe",
  points: 35600
},
{
  name: "Lynwood Wetherby",
  points: Math.floor(Math.random() * 50000)
},
{
  name: "Xavier Reimer",
  points: Math.floor(Math.random() * 50000)
},
{
  name: "Hubert Santucci",
  points: Math.floor(Math.random() * 50000)
},
{
  name: "Kimberlee Maust",
  points: Math.floor(Math.random() * 50000)
},{
  name: "Tana Rylander",
  points: Math.floor(Math.random() * 50000)
},
{
  name: "Oscar Dixson",
  points: Math.floor(Math.random() * 50000)
},
{
  name: "Synthia Sawin",
  points: Math.floor(Math.random() * 50000)
}];

// Facebook style store creation.
const UserStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getAll() {
    return {users: users};
  },

  getUser(id) {
    return _.find(events, function(u) {
      return u.id == id;
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

export default UserStore;
