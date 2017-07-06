// external imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import 'normalize.css';
// internal imports
import App from './components/App';
import Game from './containers/game';
import setInitialGameState from './reducers';
import initialBoard from './initial_board.json';

const initialData = { data: initialBoard };

let store = createStore(setInitialGameState, initialData, applyMiddleware(ReduxPromise));
// testing
console.log(store.getState());

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