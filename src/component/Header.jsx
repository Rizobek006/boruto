import React from 'react'
import "./header.css"
function Header() {
  return (
    <div className='card'>
      <div className='card1'>
        <h1>Boruto</h1>
      </div>
      <div className='card2'>
        <a href="#home">Home</a>
        <a href="#partners">Partners</a>
        <a href="#teachers">Teachers</a>
      </div>
    </div>
  )
}

export default Header