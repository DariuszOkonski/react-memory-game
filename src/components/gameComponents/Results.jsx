import React from 'react';

const Results = () => {
  return (
    <div className="card bg-secondary text-light text-center" style={{ width: '100%' }}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-primary">Number of steps: 23</li>
        <li className="list-group-item bg-primary">Time: 02:20</li>
      </ul>
    </div>
  );
}

export default Results;