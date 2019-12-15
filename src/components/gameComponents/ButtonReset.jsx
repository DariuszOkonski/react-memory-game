import React from 'react';

const ButtonReset = ({ cards }) => {
  return (
    cards === 0
      ?
      null
      :
      <div className="text-center mt-4">
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => window.location.reload()}
        >Reset Game</button>
      </div>
  );
}

export default ButtonReset;