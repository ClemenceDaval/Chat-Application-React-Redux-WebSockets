import { connect } from 'react-redux';

import SignIn from 'src/components/SignIn';
import { setLogin, setPassword } from 'src/actions';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  newLogin: state.login,
  newPassword: state.password,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  setNewLogin: (newValue) => {
    dispatch(setLogin(newValue));
  },
  setNewPassword: (newValue) => {
    dispatch(setPassword(newValue));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
