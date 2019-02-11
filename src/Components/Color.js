import React from 'react';

const Color = (props) => {
  return (
    <div className='align'>
      <button 
        style={{backgroundColor: props.color}} 
        className='color-div'>
          <p className='color-code'>{props.color}</p>
      </button>
    </div>
  );
}

export default Color;