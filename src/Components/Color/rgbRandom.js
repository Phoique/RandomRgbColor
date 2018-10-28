import React, { Component } from 'react';
import './color.css';
import Color from './color';

export class RgbRandom extends Component {
  Random() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return(`rgb(${r}, ${g}, ${b})`);
  }

  constructor(props) {
    super(props);
    this.Random = this.Random.bind(this);
  }

  render() {
    return (
      <div>
      {
        [...Array(20)].map((x, i) =>
          <Color key = {i} rgbColor = {this.Random()}/>
        )
        }
      </div>
    )
  }
}

export default RgbRandom;

