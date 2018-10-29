import React, { Component } from 'react';
import './button.css';

class Button extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    window.location.reload();
  }

  render() {

    return (
    <div className='center'>
      <button className='button' onClick= {this.onChange}>Random Color</button>
    </div>);
  }
}

export default Button;