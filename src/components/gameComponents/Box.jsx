import React from 'react';

const Box = ({ id, color, displayBg, openCards, clickable, visible }) => {

  let boxStyle = {
    backgroundColor: displayBg ? 'gray' : color,
    visibility: visible ? 'visible' : 'hidden',
  }

  return (
    <div
      className="box"
      style={boxStyle}
      onClick={clickable ? () => openCards(id, color) : null}
    ></div>
  );
}

export default Box;