import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'normalize.css'
import App from './components/App';
import Game from './components/game';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/game" component={Game} />
      <Route path="/" component={App} />
    </Switch>
  </Router>
  , document.getElementById('root'));