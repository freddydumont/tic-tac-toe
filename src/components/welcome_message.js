import React, { Component } from 'react';
import Typed from 'typed.js';

class WelcomeMessage extends Component {

  componentDidMount() {
    // eslint-disable-next-line
    const first = new Typed(".first", {
      strings: ["Puny Human! ^250 Will you dare defy me?^500"],
      typeSpeed: 50,
      onComplete: () => {
        callSecond();
        document.querySelector(".typed-cursor").style.display = "none";
      }
    });
    function callSecond() {
      // eslint-disable-next-line
      const second = new Typed(".second", {
        strings: ["I am <em><span style='color: #e06c75'>Minimax</span></em>. ^250 I <span style='text-decoration: underline'>cannot</span> be defeated."],
        typeSpeed: 40
        //onComplete, send an action that allows buttons to be rendered
      })
    }
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