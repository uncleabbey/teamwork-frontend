import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="row">
        <div className="row logo">
          <img src={"https://res.cloudinary.com/kayode/image/upload/v1572940640/icons/6_-_Team-512_biztib.png"}  alt="Icon" />
          <h3 className="title">TeamWork</h3>
        </div>
        
      <Navbar />
    </header>
  )
}

export default Header
