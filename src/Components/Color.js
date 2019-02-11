import React from 'react';

const Color = (props) => {
  return (
    <div className='align'>
      {
        props.rgbColor.map(
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
  )
}

export default Color;