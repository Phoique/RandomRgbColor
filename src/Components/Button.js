import React from 'react';

const onReload = () => {
  window.location.reload();
}

const Button = () => {
  return (
    <div className='center'>
      <button className='button' onClick= {onReload}>Random Color</button>
    </div>
  )
}

export default Button;