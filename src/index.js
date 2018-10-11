import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'

import reducers from './reducers';
import App from './components/app';
import thunker from 'redux-thunk';

/* eslint-disable */
const composeEnhancers = typeof __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' && __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
/* eslint-enable */

const middlewares = []

middlewares.push(thunker);
if (process.env.NODE_ENV !== 'production') middlewares.push(createLogger({ level: 'info' }))


const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
