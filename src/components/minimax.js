import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typed from 'typed.js';
import evilBot from '../images/evil-bot.svg';

class Minimax extends Component {
  constructor(props) {
    super(props);
    this.winStrings = ["Hahaha!^200 I have won!", "I like this game!",
      "I am invincible!!!", "Child's play."];

    this.drawStrings = ["You are lucky...^200 for now.",
      "Is this the best you can do?", "A temporary relief.^200 Your end is unavoidable."];

    this.startingStrings = ["Tic Tac Toe is my jam.", "Beating humans is my thing.", "Warning!^200 I am good at this."]

    this.errorString = ["I AM ERROR"];
  }

  typeStrings(str, length) {
    let arr = [str[Math.floor(Math.random() * length)]]
    // eslint-disable-next-line
    let typed = new Typed(".message", {
      strings: arr,
      typeSpeed: 40,
      showCursor: false
    });
  }

  componentDidMount() {
    this.typeStrings(this.startingStrings, this.startingStrings.length);
  }

  componentDidUpdate() {
    // if status is win type win strings
    if (this.props.status === "win") {
      document.querySelector(".message").innerHTML = '';
      this.typeStrings(this.winStrings, this.winStrings.length);
    }
    // if status is draw, type draw strings
    if (this.props.status === "draw") {
      document.querySelector(".message").innerHTML = '';
      this.typeStrings(this.drawStrings, this.drawStrings.length);
    }
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

// mapping state here to avoid creating a container for a single piece of state
const mapStateToProps = state => {
  return {
    status: state.data.status
  }
}

Minimax = connect(mapStateToProps)(Minimax);

export default Minimax;