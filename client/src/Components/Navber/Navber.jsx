import React from 'react'
import './Navber.css';
const Navber = () => {
  return (
    <div className='navber'>
        <div className="navContainer">
            <span className='logo'>Lambooking</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navber