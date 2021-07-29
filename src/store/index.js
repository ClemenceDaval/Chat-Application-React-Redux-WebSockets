import { applyMiddleware, createStore } from 'redux';
// on importe composeWithDevTools qui va nous permettre
// de faire fonctionner à la fois nos middleware et le redux devtools
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';
import log from 'src/middlewares/log';
import auth from 'src/middlewares/auth';
import websocket from 'src/middlewares/websocket';

export default createStore(reducer, composeWithDevTools(applyMiddleware(auth, log, websocket)));
