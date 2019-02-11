import React from 'react';

const Button = () => {
  return (
    <div className='center'>
      <button 
      className='button' 
      onClick= {() => window.location.reload()}>
      Random Color
      </button>
    </div>
  )
}

export default Button;