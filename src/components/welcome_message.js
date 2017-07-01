import React, { Component } from 'react';
import Typed from 'typed.js';

class WelcomeMessage extends Component {

  componentDidMount() {
    // eslint-disable-next-line
    const first = new Typed(".first", {
      strings: ["Puny Human! ^250 Will you dare defy me?"],
      typeSpeed: 50,
      showCursor: false
      // onComplete: () => { document.querySelector(".typed-cursor").style.display = "none" }
    });
    // eslint-disable-next-line
    const second = new Typed(".second", {
      strings: ["I am <em><span style='color: #e06c75'>Minimax</span></em>. ^250 I <span style='text-decoration: underline'>cannot</span> be beaten."],
      typeSpeed: 40,
      showCursor: false,
      startDelay: 3000
    })
  }

  render() {
    return (
      <div className="welcome-message">
        <p><span className="first"></span></p>
        <p><span className="second"></span></p>
      </div>
    );
  }
}

export default WelcomeMessage;