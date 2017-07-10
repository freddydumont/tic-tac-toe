import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typed from 'typed.js';
import evilBot from '../images/evil-bot.svg';

class Minimax extends Component {
  constructor(props) {
    super(props);
    this.winStrings = ["Hahaha! I have won!", "You lose again, human.",
      "I am invincible!!!", "Child's play."];

    this.drawStrings = ["You are lucky, for now.",
      "One mistake, and you shall fall.", "A temporary relief. Your end is unavoidable."];

    this.startingStrings = ["Tic Tac Toe is my jam.", "Beating humans is my thing.", "Warning! I am good at this."]

    this.errorString = ["I AM ERROR"];
  }

  componentDidMount() {
    let arr = [this.startingStrings[Math.floor(Math.random() * 3)]]
    const typed = new Typed(".message", {
      strings: arr,
      typeSpeed: 50,
      showCursor: false
    });
  }

  componentDidUpdate() {
    // if status is win type win strings
    console.log(this.props.status);
    // if status is draw, type draw strings
  }

  render() {
    return (
      <div className="minimax">
        <img src={evilBot} alt={"Evil robot face"} />
        <div className="dialog">
          <p><span className="message"></span></p>
        </div>
      </div>
    );
  }
}

// mapping state here to avoid creating a container for a single
// piece of state
const mapStateToProps = state => {
  return {
    status: state.data.status
  }
}

Minimax = connect(mapStateToProps)(Minimax);

export default Minimax;