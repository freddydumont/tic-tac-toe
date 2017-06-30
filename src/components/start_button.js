import React, { Component } from 'react';

export default class StartButton extends Component {
  constructor(props) {
    super(props);

    this.state = { hover: false };
  }

  handleHover = (hover) => {
    // selector is opposite of letter
    const selector = this.props.letter === 'X' ? 'O' : 'X';
  }

  render() {
    return (
      <div
        className={"start-button " + this.props.letter}
        onMouseEnter={this.handleHover(true)}
        onMouseLeave={this.handleHover(false)}>
        <span>{this.props.letter}</span>
        <p>{this.props.letter === 'X' ? "You Start" : "Minimax Starts"}</p>
      </div>
    );
  }
}