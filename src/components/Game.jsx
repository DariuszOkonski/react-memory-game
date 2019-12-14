import React from 'react';
import { NavLink } from 'react-router-dom';

const Game = () => {
  return (
    <div>

      <div className="card bg-secondary text-light text-center" style={{ width: '100%' }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-primary">Number of steps: 23</li>
          <li className="list-group-item bg-primary">Time: 02:20</li>
        </ul>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">

            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/game" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Number Of Cards
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/game/eight">8</NavLink>
                <NavLink className="dropdown-item" to="/game/twelwe">12</NavLink>
                <NavLink className="dropdown-item" to="/game/sixteen">16</NavLink>
                <NavLink className="dropdown-item" to="/game/twenty">20</NavLink>
              </div>
            </li>
          </ul>
        </div>
      </nav>



    </div>
  );
}

export default Game;