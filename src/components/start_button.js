import React, { Component } from 'react';

export default class StartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      opposite: this.props.letter === 'X' ? 'O' : 'X'
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
    document.querySelector(`.${this.state.opposite}`).classList.toggle("red");
  }

  render() {
    const color = this.state.hover ? "green" : '';

    return (
      <div
        className={`start-button ${this.props.letter} ${color}`}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}>
        <span>{this.props.letter}</span>
        <p>{this.props.letter === 'X' ? "You Start" : "Minimax Starts"}</p>
      </div>
    );
  }
}