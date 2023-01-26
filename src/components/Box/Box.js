import React from 'react';
import './Box.css';

function handleClick() {
  console.log('I am being clicked');
}

export default function Box() {
  return (
    <div className='box' onClick={handleClick}>Boxxx</div>
  );
}