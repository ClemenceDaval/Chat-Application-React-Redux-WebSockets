import { getHighestId } from 'src/selectors';
import { ADD_MESSAGE, SET_NEW_MESSAGE } from 'src/actions';

const initialState = {
  messages: [
    {
      id: 1,
      author: 'Super Chat',
      message: 'Chalut Chat va ?',
    },
    {
      id: 2,
      author: 'Super Chat',
      message: 'Chat va Chat va...',
    },
  ],
  newMessage: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_MESSAGE:
      return {
        ...state,
        newMessage: action.newMessage,
      };
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: getHighestId(state) + 1,
            author: 'Super Chat',
            message: state.newMessage,
          },
        ],
        newMessage: '',
      };
    }
    default:
      return state;
  }
};
