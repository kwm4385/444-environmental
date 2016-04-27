import Constants  from '../Constants'
import Dispatcher  from '../Dispatcher'

/* eslint-disable no-console */

export default {
  addEvent(event) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.EVENT_ADDED,
      event: event
    });
  },

  approveEvent(eventId) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.EVENT_APPROVE,
      event: eventId
    });
  }
};
