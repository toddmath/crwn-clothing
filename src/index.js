import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from './redux/store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'typeface-open-sans-condensed';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>,
  rootEl
);

serviceWorker.register();
