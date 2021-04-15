import { getHighestId } from 'src/selectors';
import { ADD_MESSAGE, SET_NEW_MESSAGE, TOGGLE_SETTINGS, SET_LOGIN, SET_PASSWORD } from 'src/actions';

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
  open: false,
  login: '',
  password: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_MESSAGE:
      return {
        ...state,
        newMessage: action.newMessage,
      };
    case ADD_MESSAGE:
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
    case TOGGLE_SETTINGS: {
      const isOpen = state.open;
      return {
        ...state,
        open: !isOpen,
      };
    }
    case SET_LOGIN:
      return {
        ...state,
        login: action.login,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    default:
      return state;
  }
};
