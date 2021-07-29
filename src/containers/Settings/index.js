import { connect } from 'react-redux';

import Settings from 'src/components/Settings';
import { login, toggleSettings } from 'src/actions';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  // on vient lire la propriétés isSettingsOpen du state pour
  // la transmettre au composant settings par l'intermédiaire de sa prop isOpen
  isOpen: state.isSettingsOpen,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
// props: () => {
//   dispatch(actionFromAnActionCreator());
// },
  toggle: () => {
    // on veut emettre l'intention je veux inverser l'état d'ouverture du composant settings
    // pour cela, j'ai besoin d'envoyer une action au store
    // une action est un objet
    // nous allons utiliser un action creator pour qu'il crée l'objet en question
    dispatch(toggleSettings());
  },

  submit: () => {
    // au submit, je veux me logger, j'emmet donc cette intention
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
