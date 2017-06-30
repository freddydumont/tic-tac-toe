import React from 'react';

const WelcomeMessage = (props) => {
  return (
    <div className="welcome-message" >
      <p>Puny Human! Will you dare defy me?</p>
      <p>I am <em><span className="red">Minimax</span></em>. I <span className="underline">cannot</span> be beaten.</p>
    </div>
  );
};

export default WelcomeMessage;