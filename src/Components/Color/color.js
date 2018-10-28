import React, { Component } from 'react';
import './color.css';

class Color extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.rgbColor);
  }
  render() {
    return(
      <div className='align'>
        <button className='color-button'></button>
      </div>
    );
  }
}

export default Color;