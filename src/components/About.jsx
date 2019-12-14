import React from 'react';

const About = () => {
  return (
    <div>
      <div className="card bg-secondary text-light" style={{ width: '100%' }}>
        <div className="card-header h2">
          About
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-primary">Version: 1.0.0</li>
          <li className="list-group-item bg-primary">Author: Dariusz Okonski</li>
          <li className="list-group-item bg-primary">Year: 2019</li>
        </ul>
      </div>
    </div>
  );
}

export default About;