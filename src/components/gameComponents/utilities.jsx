import uuid from 'uuid/v1';

const colors = ['green', 'red', 'blue', 'cadetblue', 'orange', 'darkcyan', 'pink', 'brown', 'aqua', 'chartreuse'];

const createBoxes = (boxesNumber) => {
  let boxesArr = [];

  for (let index = 0; index < boxesNumber / 2; index++) {
    boxesArr.push({ id: uuid(), color: colors[index] });
    boxesArr.push({ id: uuid(), color: colors[index] });
  }

  return boxesArr;
}

const mixBoxes = (arr) => {
  let tempArr = [];

  while (arr.length !== 0) {

  }
}

export { createBoxes };