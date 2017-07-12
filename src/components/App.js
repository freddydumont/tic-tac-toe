import React, { Component } from 'react';
import { connect } from 'react-redux';
import WelcomeMessage from './welcome_message';
import ChooseWeapon from './choose_weapon';
import evilBot from '../images/evil-bot.svg';
import '../styles/App.css';
import { resetState } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    // resetting state here is case user goes back from Game
    this.props.dispatch(resetState());
  }

  render() {
    return (
      <div className="app">
        <img src={evilBot} alt={"Evil robot face"} height={150} width={150} />
        <WelcomeMessage />
        <ChooseWeapon />
      </div>
    );
  }
}
App = connect()(App);

export default App;