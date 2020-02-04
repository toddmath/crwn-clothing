import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { store } from './redux/store';
import * as serviceWorker from './serviceWorker';

import 'typeface-open-sans-condensed';
import 'typeface-open-sans';
// import 'typeface-source-sans-pro';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
