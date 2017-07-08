import React from 'react';
import evilBot from '../images/evil-bot.svg';

const Minimax = () => (
  <div className="minimax">
    <img src={evilBot} alt={"Evil robot face"} />
    <div className="dialog">
      <p>Your turn, Human.</p>
    </div>
  </div>
);

export default Minimax;