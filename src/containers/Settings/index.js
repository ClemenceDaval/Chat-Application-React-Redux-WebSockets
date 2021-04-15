import { connect } from 'react-redux';

import Settings from 'src/components/Settings';
import { toggleSettings } from 'src/actions';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  isOpen: state.open,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleSettings: () => {
    dispatch(toggleSettings());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
