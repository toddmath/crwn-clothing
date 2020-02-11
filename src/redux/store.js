import { applyMiddleware, createStore } from 'redux';

// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { composeWithDevTools } from 'redux-devtools-extension';
// import { persistStore } from 'redux-persist';

import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-sagas';
import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const composeEnhancers = composeWithDevTools({
  name: 'crwn-clothing',
  maxAge: 15,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: [...getDefaultMiddleware(), sagaMiddleware, logger],
//   devTools: process.env.NODE_ENV !== 'production',
// });

sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);

// export default { store, persistor };

export default store;
