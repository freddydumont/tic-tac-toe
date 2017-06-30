import React, { Component } from 'react';
import WelcomeMessage from './welcome_message'
import evilBot from '../images/evil-bot.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <img className="robot" src={evilBot} alt={"Evil robot face"} />
        <WelcomeMessage />
        <h1>Choose your weapon.</h1>
      </div>
    );
  }
}

export default App;