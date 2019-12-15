import React, { useState } from 'react';
import Box from './Box';
import { createBoxes } from './utilities';

const Boxes = (props) => {
  const [boxesArr, setBoxexArr] = useState(createBoxes(props.cards));

  console.log(boxesArr);
  return (
    props.cards === 0 ?
      <div className="card bg-danger text-light h5 text-center">
        <div className="card-body">
          Nothing to display. Choose number of cards
        </div>
      </div>
      :
      <div className="playBoard">
        {
          boxesArr.map(box => <Box key={box.id} {...box} />)
        }
      </div>
  );
}

export default Boxes;