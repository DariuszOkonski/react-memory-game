import React from 'react';

const ButtonReset = ({ restartGame }) => {
  return (
    <div className="text-center mt-4">
      <button
        className="btn btn-secondary btn-sm"
        onClick={restartGame}
      >Reset Game</button>
    </div>
  );
}

export default ButtonReset;