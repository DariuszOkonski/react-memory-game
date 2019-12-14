import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div className="jumbotron bg-danger text-light">
      <h1 className="display-5">Error - there is no such a route</h1>
      <p className="lead">choose one of the options below</p>
      <hr className="my-4" />
      <NavLink className="btn btn-primary btn-sm mr-2" exact to="/" role="button">Home</NavLink>
      <NavLink className="btn btn-primary btn-sm mr-2" to="/game" role="button">Game</NavLink>
      <NavLink className="btn btn-primary btn-sm" to="/about" role="button">About</NavLink>
    </div>
  );
}

export default Error;