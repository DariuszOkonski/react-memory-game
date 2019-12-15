import React from 'react';
import { NavLink } from 'react-router-dom';

const Cards = () => {
  return (
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
  );
}

export default Cards;