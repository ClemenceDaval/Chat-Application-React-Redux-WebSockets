// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from 'src/store';
import Chatroom from 'src/components/Chatroom';

render(
  <Provider store={store}>
    <Chatroom />
  </Provider>,
  document.getElementById('root'),
);
