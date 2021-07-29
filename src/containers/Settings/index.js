import { connect } from 'react-redux';

import Settings from 'src/components/Settings';
import { toggleSettings, setLogin, setPassword } from 'src/actions';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  isOpen: state.open,
  newLogin: state.login,
  newPassword: state.password,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleSettings: () => {
    dispatch(toggleSettings());
  },
  setNewLogin: (newValue) => {
    dispatch(setLogin(newValue));
  },
  setNewPassword: (newValue) => {
    dispatch(setPassword(newValue));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
