import React from 'react';

const Results = ({ steps }) => {

  return (
    <div className="card bg-secondary text-light text-center" style={{ width: '100%' }}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-primary">Number of steps: {steps}</li>
      </ul>
    </div>
  );
}

export default Results;