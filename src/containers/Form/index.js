import { connect } from 'react-redux';

import Form from 'src/components/Form';
import { fillOutInput } from 'src/actions';

const mapStateToProps = (state) => ({
  newMessage: state.newMessage,
});

const mapDispatchToProps = (dispatch) => ({
  writeNewMessage: (newMessage) => {
    console.log('un message est en train d\'être écrit!');
    dispatch(fillOutInput(newMessage));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
