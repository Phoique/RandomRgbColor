import React, { Component } from 'react';
import './App.css';
import Button from './RefreshButton/Button';
import RgbRandom from './Color/rgbRandom';

class App extends Component {

  render() {
    
    return (
    <div>
      <div className='button-center'>
        <Button />
      </div>
      <div>
      <RgbRandom />
      </div>
    </div>);
  }
}

export default App;