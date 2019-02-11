import React, { Component } from 'react';
import Button from './Button';
import RgbRandom from './Random';
import './style.css';

class App extends Component {

  render() {
    
    return (
    <div>
      <div className='button-center'>
        <Button />
      </div>
      <RgbRandom />
    </div>
    );
  }
}

export default App;