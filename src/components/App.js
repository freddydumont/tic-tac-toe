import React, { Component } from 'react';
import evilBot from '../images/evil-bot.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <img className="robot" src={evilBot} alt={"Evil robot face"} />
      </div>
    );
  }
}

export default App;