import Constants  from '../Constants'
import Dispatcher  from '../Dispatcher'

/* eslint-disable no-console */

export default {
  checkTip(tid, sid, done) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TIPS_CHECKED,
      tid, sid, done
    });
  },
};
