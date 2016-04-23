import keyMirror  from 'fbjs/lib/keyMirror'

export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',

  // Each time you add an action, add it here... They should be past-tense
  ActionTypes: keyMirror({
    TASK_ADDED: 'task_added',
    TASK_REMOVED: 'task_removed'
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
