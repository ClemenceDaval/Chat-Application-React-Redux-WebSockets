/* eslint-disable arrow-body-style */
// on stocke l'état initial de notre application

import { FILL_OUT_INPUT } from "../actions";

// dans une variable (constante plutôt)
const initialState = {
  messagesList: [
    {
      id: 1,
      content: 'salut',
      author: 'supercat',
    },
    {
      id: 2,
      content: 'comment ça va ?',
      author: 'supercat',
    },
    {
      id: 3,
      content: 'ba alors tu ne réponds pas ?',
      author: 'supercat',
    },
  ],
  newMessage: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FILL_OUT_INPUT:
      return {
        ...state,
        newMessage: action.newMessage,
      };
    default:
      return state;
  }
};

// pour l'instant notre reducer ne fait pas grand chose,
// il se contente de renvoyer le state non modifié

// en fonction de l'action à effectuer, on retourne une copie
// du state courant auquel on change seulement ce qui est
// induit par l'action demandée
// switch (action.type) {
//   case CHANGE_DIRECTION:
//     return {
//       ...state,
//       direction: action.newDirection,
//     };
//   case CHANGE_FIRST_COLOR:
//     return {
//       ...state,
//       firstColor: action.newColor,
//       nbColors: state.nbColors + 1,
//     };
//   case CHANGE_LAST_COLOR:
//     return {
//       ...state,
//       lastColor: action.newColor,
//       nbColors: state.nbColors + 1,
//     };
//   default:
// return state;
// }
// };

export default reducer;
