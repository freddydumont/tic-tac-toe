import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

// letter === 'X' ? String.fromCharCode(215) : String.fromCharCode(9675)

const Game = () => (
  <CSSTransitionGroup
    transitionName="example"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}>
    <div>Test</div>
  </CSSTransitionGroup>
);

export default Game;