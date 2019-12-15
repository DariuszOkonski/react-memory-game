import uuid from 'uuid/v1';

const colors = ['green', 'red', 'blue', 'cadetblue', 'orange', 'darkcyan', 'pink', 'brown', 'aqua', 'chartreuse'];

const createBoxes = (boxesNumber) => {
  let boxesArr = [];

  for (let index = 0; index < boxesNumber / 2; index++) {
    boxesArr.push({ id: uuid(), color: colors[index], displayBg: true, clickable: true, visible: true });
    boxesArr.push({ id: uuid(), color: colors[index], displayBg: true, clickable: true, visible: true });
  }

  // return shuffle(boxesArr);
  return boxesArr;
}

const shuffle = (arr) => {
  let currentIndex = arr.length;
  let temporaryValue;
  let randomIndex = 0;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  return arr;
}

export { createBoxes };