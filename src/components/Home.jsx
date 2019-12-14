import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="jumbotron bg-secondary text-light">
      <h1 className="display-5">Memory Game</h1>
      <p className="lead">Let's play</p>
      <hr className="my-4" />
      <NavLink className="btn btn-primary btn-sm mr-2" to="/game" role="button">Game</NavLink>
      <NavLink className="btn btn-primary btn-sm" to="/about" role="button">About</NavLink>
    </div>
  );
}

export default Home;
