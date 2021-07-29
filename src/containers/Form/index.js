import { connect } from 'react-redux';

import Form from 'src/components/Form';
import { addMessage, setNewMessage } from 'src/actions';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  newMessage: state.newMessage,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  sendMessage: () => {
    // on souhaite emmettre l'intention : je veux créer un nouveau message
    dispatch(addMessage());
  },
  setNewMessage: (newValue) => {
    dispatch(setNewMessage(newValue));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
