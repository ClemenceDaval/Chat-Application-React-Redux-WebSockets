import { connect } from 'react-redux';

import Message from 'src/components/Message';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  isMine: ownProps.author === state.username,
});

export default connect(mapStateToProps)(Message);
