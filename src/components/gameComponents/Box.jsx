import React from 'react';

const Box = ({ color }) => {
  let boxStyle = {
    backgroundColor: color
  }

  return (
    <div className="box" style={boxStyle}></div>
  );
}

export default Box;