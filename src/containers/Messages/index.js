import { connect } from 'react-redux';

import Messages from 'src/components/Messages';

const mapStateToProps = (state) => ({
  messagesList: state.messagesList,
});

export default connect(mapStateToProps)(Messages);
