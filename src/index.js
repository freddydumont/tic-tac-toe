// external imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import 'normalize.css';
// internal imports
import App from './components/App';
import Game from './components/game';
import reducer from './reducers';
// service worker
import { unregister } from './registerServiceWorker'

// redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducer, composeEnhancers(applyMiddleware(ReduxPromise)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/tic-tac-toe/game" component={Game} />
        <Route path="/tic-tac-toe" component={App} />
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root'));
unregister();