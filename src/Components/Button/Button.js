import React, { Component } from 'react';
import './button.css';
export class Button extends Component {
  render() {
    return (
    <div className='center'>
      <button className='button'>Random Color</button>
    </div>);
  }
}

export default Button;