import React, { Component } from 'react';
import Box from './Box';
import { createBoxes } from './utilities';

const timeSpan = 1500;
class Boxes extends Component {
  state = {
    boxesArr: createBoxes(this.props.cards),
    firstOpen: false,
    secondOpen: false,
    firstColor: '',
    secondColor: '',
  }

  openCards = (id, color) => {
    // console.log(`id: ${id} - color: ${color}`);
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

    this.setState({
      boxesArr,
      firstOpen: false,
      secondOpen: false,
      firstColor: '',
      secondColor: '',
    })
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

  componentDidUpdate() {
    if (this.state.firstOpen && this.state.secondOpen) {
      if (this.state.firstColor === this.state.secondColor) {
        setTimeout(this.handleEqualColors, timeSpan);
      } else {
        setTimeout(this.handleNotEqualColors, timeSpan);
      }
    }
  }



  render() {
    console.log(this.state.boxesArr)
    return (
      this.props.cards === 0 ?
        <div className="card bg-danger text-light h5 text-center">
          <div className="card-body">
            Nothing to display. Choose number of cards
        </div>
        </div>
        :
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
    );
  }
}

export default Boxes;