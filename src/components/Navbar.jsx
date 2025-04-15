
import "./Navbar.css";
import React, { useState } from 'react'


const Navbar = () => {
  const links = ["Explore", "Solutions", "About", "Blog" ,"Log In"]

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = (show) => {
    setShowMenu(show);
  }

  return (
    <div className='nav'>
      <h1 className='heading'>break<span className="span">io</span></h1>
      <div onClick={() => setShowMenu(true)} className='menu'><img src="/icons/Buttons Group.png" alt="" /></div>
      <div className='links' style={{ display: showMenu ? "flex" : "none" }} >
        {links.map((link, index) => {
          return <a key={index} href="">{link}</a>
        })}
        <button onClick={() => setShowMenu(false)} className='x'>X</button>
        <button className='start' >Start Now</button>
      </div>
    </div>
  )
}

export default Navbar