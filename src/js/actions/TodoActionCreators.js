import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

/* eslint-disable no-console */

export default {
  addItem(text) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_ADDED,
      text: text
    });
  },

  clearList(text) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_REMOVED,
      text: text
    });
  },

  completeTask(task) {
    console.warn('completeTask action not yet implemented...', task);
  }
};
