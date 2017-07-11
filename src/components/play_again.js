import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

class PlayAgain extends Component {
  state = { YesVisibility: "hide", NoVisibility: "hide" }
  render() {
    // toggle visibility of triangles before yes and no on hover
    const toggleVisibility = (btn) => {
      this.state[`${btn}Visibility`] === "hide"
        ? this.setState(prevState => {
          return { ...prevState, [`${btn}Visibility`]: "show" }
        })
        : this.setState(prevState => {
          return { ...prevState, [`${btn}Visibility`]: "hide" }
        });
    }

    return (
      <ReactModal
        isOpen={this.props.openModal}
        className="content"
        overlayClassName="overlay"
        contentLabel={"Play Again"}
        closeTimeoutMS={500}>
        {/* Display proper title depending on status
        * Make title invisible for transition */}
        <h1 style={{ color: this.props.status === 'win' ? '#e06c75' : this.props.status === 'draw' ? '#98c378' : 'rgba(0, 0, 0, 0)' }}>
          {this.props.status === 'win' ? 'You Lose' : 'Draw'}
        </h1>
        <h2>Play Again?</h2>
        <div className="choice">
          {/* YES resets the game and NO sends user back to home page */}
          <h3 onClick={() => this.props.resetGame(this.props.initialGameState)}
            onMouseEnter={() => toggleVisibility('Yes')}
            onMouseLeave={() => toggleVisibility('Yes')}>
            <span className={this.state.YesVisibility}>&#9656;</span> YES
          </h3>
          <Link to="/">
            <h3 onMouseEnter={() => toggleVisibility('No')}
              onMouseLeave={() => toggleVisibility('No')}>
              <span className={this.state.NoVisibility}>&#9656;</span> NO
            </h3>
          </Link>
        </div>
      </ReactModal>
    );
  }
}

export default PlayAgain;