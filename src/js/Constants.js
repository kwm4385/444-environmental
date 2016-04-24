import keyMirror  from 'fbjs/lib/keyMirror'

export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',

  // Each time you add an action, add it here... They should be past-tense
  ActionTypes: keyMirror({
    EVENT_ADDED: 'event_added'
  }),

  ActionSources: keyMirror({
    VIEW_ACTION: 'view_action'
  }),
};
