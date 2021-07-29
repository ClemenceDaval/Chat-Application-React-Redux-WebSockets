import { connect } from 'react-redux';

import App from 'src/components/App';
import { connectWs } from 'src/actions';

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  connectWS: () => {
    // on emmet l'intention de se connecter au websocket
    // cette intention ne peut pas se traduire en modification du state
    // on ne doit donc pas la traiter dans un reducer mais bien dans un middleware
    dispatch(connectWs());
  },
});

export default connect(null, mapDispatchToProps)(App);
