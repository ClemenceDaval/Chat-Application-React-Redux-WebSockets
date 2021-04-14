import { connect } from 'react-redux';

import Messages from 'src/components/Messages';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state) => ({
  messages: state.messages,
});

export default connect(mapStateToProps)(Messages);
