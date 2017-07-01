import React, { Component } from 'react';
import Typed from 'typed.js';

class WelcomeMessage extends Component {

  componentDidMount() {
    const typed = new Typed(".welcome-message", {
      stringsElement: "#typed-strings",
      typeSpeed: 40,
      showCursor: false
    });
  }

  render() {
    return (
      <div className="welcome-message">
        <div id="typed-strings">
          <span id="typed"></span>
          <p>Puny Human! Will you dare defy me?</p>
          <p>I am <em><span className="red">Minimax</span></em>. I <span className="underline">cannot</span> be beaten.</p>
        </div>
      </div>
    );
  }
}

export default WelcomeMessage;