/* eslint-disable import/no-extraneous-dependencies */
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

const middlewares = [logger];

const composeEnhancers = composeWithDevTools({
  name: 'crwn-clothing',
  maxAge: 15,
});

/* eslint-disable no-underscore-dangle */
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
/* eslint-enable */

export const persistor = persistStore(store);

export default { store, persistor };
