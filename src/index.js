import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import 'normalize.css';
import App from './components/App';
import Game from './components/game';
import playerSymbol from './reducers';
import { chooseSymbol } from './actions'; // for testing

let store = createStore(playerSymbol);
// testing
store.dispatch(chooseSymbol('X'));
console.log(store.getState());

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/game" component={Game} />
      <Route path="/" component={App} />
    </Switch>
  </Router>
  , document.getElementById('root'));