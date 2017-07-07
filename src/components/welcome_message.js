import React, { Component } from 'react';
import Typed from 'typed.js';

class WelcomeMessage extends Component {

  componentDidMount() {
    const strings = ["<p>Puny Human! ^250 Will you dare defy me?^500</p>" +
      "<p>I am <em><span style='color: #e06c75'>Minimax</span></em>. ^250 I <span style='text-decoration: underline'>cannot</span> be defeated.</p>"]
    // eslint-disable-next-line
    const first = new Typed(".first", {
      strings,
      typeSpeed: 50,
      showCursor: false
    });
  }

  render() {
    return (
      <div className="welcome-message">
        <p><span className="first"></span></p>
      </div>
    );
  }
}

export default WelcomeMessage;