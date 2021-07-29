// action type ADD_MESSAGE
export const ADD_MESSAGE = 'ADD_MESSAGE';

// action creator addMessage
export const addMessage = () => ({
  type: ADD_MESSAGE,
});

// action type SET_NEW_MESSAGE
export const SET_NEW_MESSAGE = 'SET_NEW_MESSAGE';

// action creator setNewMessage
export const setNewMessage = (value) => ({
  type: SET_NEW_MESSAGE,
  newMessage: value,
});

// action type TOGGLE_SETTINGS
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';

// action creator toggleSettings
export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

// action type CHANGE_FIELD_VALUE
export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';

// action creator changeFieldValue
export const changeFieldValue = (name, newValue) => ({
  type: CHANGE_FIELD_VALUE,
  newValue: newValue,
  name: name,
});

// action type LOGIN
export const LOGIN = 'LOGIN';

// action creator login
export const login = () => ({
  type: LOGIN,
});

// action type SAVE_USER
export const SAVE_USER = 'SAVE_USER';

// action creator saveUser
export const saveUser = (username) => ({
  type: SAVE_USER,
  username: username,
});

// action type CONNECT_WS
export const CONNECT_WS = 'CONNECT_WS';

// action creator connectWs
export const connectWs = () => ({
  type: CONNECT_WS,
});

// action type SAVE_RECEIVED_MESSAGE
export const SAVE_RECEIVED_MESSAGE = 'SAVE_RECEIVED_MESSAGE';

// action creator saveReceivedMessage
export const saveReceivedMessage = (message) => ({
  type: SAVE_RECEIVED_MESSAGE,
  message,
});


// action type SAVE_ALL_RECEIVED_MESSAGES
export const SAVE_ALL_RECEIVED_MESSAGES = 'SAVE_ALL_RECEIVED_MESSAGES';

// action creator saveAllReceivedMessages
export const saveAllReceivedMessages = (messages) => ({
  type: SAVE_ALL_RECEIVED_MESSAGES,
  messages,
});
