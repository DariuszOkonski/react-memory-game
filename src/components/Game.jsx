import React, { useState } from 'react';
import Results from './gameComponents/Results';
import Cards from './gameComponents/Cards';
import Boxes from './gameComponents/Boxes';

const Game = ({ cards }) => {
  const [steps, setSteps] = useState(0);

  const handleIncreaseSteps = () => {
    setSteps(steps + 1);
  }

  return (
    <div>
      <Results steps={steps} />
      <Cards />

      <Boxes
        cards={cards}
        increaseSteps={handleIncreaseSteps}
      />
    </div>
  );
}

export default Game;