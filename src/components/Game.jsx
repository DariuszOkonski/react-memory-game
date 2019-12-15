import React from 'react';
import Results from './gameComponents/Results';
import Cards from './gameComponents/Cards';
import Boxes from './gameComponents/Boxes';
import ButtonReset from './gameComponents/ButtonReset';

const Game = ({ cards }) => {
  return (
    <div>

      <Results />
      <Cards />

      <Boxes cards={cards} />

      <ButtonReset cards={cards} />
    </div>
  );
}

export default Game;