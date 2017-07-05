import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'normalize.css';
import App from './components/App';
import Game from './containers/game';
import playerSymbol from './reducers';
import initialBoard from './initial_board.json'

let store = createStore(playerSymbol, initialBoard);
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