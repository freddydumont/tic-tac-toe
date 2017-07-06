// external imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import 'normalize.css';
// internal imports
import App from './components/App';
import Game from './containers/game';
import reducer from './reducers';
import initialBoard from './initial_board.json';

const initialData = { data: initialBoard };

let store = createStore(reducer, initialData, applyMiddleware(ReduxPromise));
// testing
console.log("store after createStore is", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/game" component={Game} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root'));