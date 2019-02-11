import React from 'react';

const Color = (props) => {
  return (
    <div className='align'>
      <div 
        style={{backgroundColor: props.color}} 
        className='color-div'>
          <p className='color-code'>{props.color}</p>
      </div>
    </div>
  );
}

export default Color;