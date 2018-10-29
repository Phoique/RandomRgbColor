import React, { Component } from 'react';
import './color.css';
import Color from './color';

class RgbRandom extends Component {

  Random() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256)
    return(`rgb(${r}, ${g}, ${b})`);
  }

  constructor(props) {
    super(props);
    this.Random = this.Random.bind(this);
  }

  render() {

    let rgbArray = [];
    for (let i = 0; i < 24; i++) {
      let randomFunction = this.Random();
      rgbArray.push(randomFunction);
    }
    
    return (
      
      <div>
      {
        <Color rgbColor = {rgbArray}/>
      }
      </div>
    )
  }
}

export default RgbRandom;

