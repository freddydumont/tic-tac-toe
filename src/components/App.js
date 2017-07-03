import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WelcomeMessage from './welcome_message'
import StartButton from './start_button'
import evilBot from '../images/evil-bot.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <img src={evilBot} alt={"Evil robot face"} height={150} width={150} />
        <WelcomeMessage />
        <h1>Choose your weapon.</h1>
        <div className="buttons-container">
          <Link to="/game">
            <StartButton letter='X' />
          </Link>
          <Link to="/game">
            <StartButton letter='O' />
          </Link>
        </div>
      </div>
    );
  }
}

export default App;