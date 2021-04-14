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
