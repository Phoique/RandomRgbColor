import React, { Component } from 'react';
import './color.css';

class Color extends Component {

  render() {
    return(
      <div className='align'>
        {
          this.props.rgbColor.map(
            (color, key) => {
              return(
                <div 
                key={key} 
                style={{backgroundColor: color}} 
                className='color-div'>
                  <p className='color-code'>{color}</p>
                </div>
              )
            }
          )
        }
      </div>
    );
  }
}

export default Color;