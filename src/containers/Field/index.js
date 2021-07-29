import { connect } from 'react-redux';

import Field from 'src/components/Field';
import { changeFieldValue } from 'src/actions';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => {
  // on se sert de la prop name passée lors de l'instanciation du composant
  // container Field pour aller chercher dans le state l'info correspondante
  // et la transmettre au composant de présentation dans sa prop value
  const propertyName = ownProps.name;
  // par exemple, si name vaut email
  // on ira chercher state.email pour définir lka valeur de value
  return ({
    value: state[propertyName],
  });
};

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  setValue: (value) => {
    dispatch(changeFieldValue(ownProps.name, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
