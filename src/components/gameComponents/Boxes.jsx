import React, { Component } from 'react';
import Box from './Box';
import { createBoxes } from './utilities';
import ButtonReset from './ButtonReset';

const timeSpan = 1500;
class Boxes extends Component {
  state = {
    boxesArr: createBoxes(this.props.cards),
    firstOpen: false,
    secondOpen: false,
    firstColor: '',
    secondColor: '',
    counter: 0,
    endGame: false,
  }

  restartGame = () => {
    this.setState({
      boxesArr: createBoxes(this.props.cards),
      firstOpen: false,
      secondOpen: false,
      firstColor: '',
      secondColor: '',
      counter: 0,
      endGame: false,
    })

  }

  openCards = (id, color) => {
    // console.log(`id: ${id} - color: ${color}`);
    this.props.increaseSteps();
    this.openFirstCard(id, color);

    if (this.state.firstOpen) {
      this.openSecondCard(id, color);
      this.disableAllClickable();
    }
  }

  openFirstCard = (id, color) => {
    if (!this.state.firstOpen) {
      let boxesArr = [...this.state.boxesArr];
      boxesArr.forEach(box => {
        if (box.id === id) {
          box.displayBg = false;
          box.clickable = false;
        }
      })

      this.setState({
        boxesArr,
        firstOpen: true,
        firstColor: color,
      })
    }
  }

  openSecondCard = (id, color) => {
    if (!this.state.secondOpen) {
      let boxesArr = [...this.state.boxesArr];
      boxesArr.forEach(box => {
        if (box.id === id) {
          box.displayBg = false;
          box.clickable = false;
        }
      })

      this.setState({
        boxesArr,
        secondOpen: true,
        secondColor: color,
      })
    }
  }

  disableAllClickable = () => {
    let boxesArr = [...this.state.boxesArr];
    boxesArr.forEach(box => box.clickable = false);

    this.setState({
      boxesArr
    })
  }

  handleEqualColors = () => {
    let boxesArr = [...this.state.boxesArr];
    boxesArr.forEach(box => {
      if (box.color === this.state.firstColor)
        box.visible = false;
      else
        box.clickable = true;
    });

    this.setState(prevState => ({
      boxesArr,
      firstOpen: false,
      secondOpen: false,
      firstColor: '',
      secondColor: '',
      counter: prevState.counter + 2,
    }))
  }

  handleNotEqualColors = () => {
    let boxesArr = [...this.state.boxesArr];
    boxesArr.forEach(box => {
      if (box.visible) {
        box.clickable = true;
        box.displayBg = true;
      }
    })

    this.setState({
      boxesArr,
      firstOpen: false,
      secondOpen: false,
      firstColor: '',
      secondColor: '',
    })
  }

  isEndGame = () => {
    if (this.state.counter === this.props.cards && this.state.endGame === false) {
      console.log('End of a Game');
      this.setState({
        endGame: true,
      })
    }
  }

  componentDidUpdate() {
    if (this.state.firstOpen && this.state.secondOpen) {
      if (this.state.firstColor === this.state.secondColor) {
        setTimeout(this.handleEqualColors, timeSpan);
      } else {
        setTimeout(this.handleNotEqualColors, timeSpan);
      }
    }

    this.isEndGame();
  }

  render() {

    return (
      this.state.endGame ?
        (
          <div className="card bg-success text-light h5 text-center">
            <div className="card-body">
              End Game
            </div>
          </div>
        )
        :
        (this.props.cards === 0 ?
          <div className="card bg-danger text-light h5 text-center">
            <div className="card-body">
              Nothing to display. Choose number of cards
            </div>
          </div>
          :
          <div>

            <div className="playBoard">
              {
                this.state.boxesArr.map(box =>
                  <Box
                    key={box.id}
                    {...box}
                    openCards={this.openCards}
                  />)
              }
            </div>
            <ButtonReset
              restartGame={this.restartGame}
            />
          </div>
        )
    );
  }
}

export default Boxes;