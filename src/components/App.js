import React, { Component } from 'react';
import WelcomeMessage from './welcome_message';
import ChooseWeapon from './choose_weapon';
import evilBot from '../images/evil-bot.svg';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ready: false };
  }

  render() {
    return (
      <div className="app">
        <img src={evilBot} alt={"Evil robot face"} height={150} width={150} />
        <WelcomeMessage />
        {/* below should only be rendered when welcomeMessage is completed */}
        <ChooseWeapon ready={this.state.ready} />
      </div>
    );
  }
}

export default App;