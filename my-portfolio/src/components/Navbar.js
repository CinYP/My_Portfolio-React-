import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='toggleButton'>
        <button>

        </button>
        </div>
        <div className='navlinks'>
            <Link to="/"> Home </Link>
            <Link to="/portfolio"> Portfolio </Link>
            <Link to="/resume"> Resume </Link>
            <Link to="/contact"> Contact </Link>
        </div>
    </div>
  )
}

