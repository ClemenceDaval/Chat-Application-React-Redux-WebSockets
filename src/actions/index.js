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

// action creator
export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

// action type SET_LOGIN
export const SET_LOGIN = 'SET_LOGIN';

// action creator setLogin
export const setLogin = (value) => ({
  type: SET_LOGIN,
  login: value,
});

// action type SET_PASSWORD
export const SET_PASSWORD = 'SET_PASSWORD';

// action creator setPassword
export const setPassword = (value) => ({
  type: SET_PASSWORD,
  password: value,
});
