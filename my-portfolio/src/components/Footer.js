import React from 'react'
import { Link }from 'react-router-dom';
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footerlinks'>
      < Link to={''}>
      <button>
        LinkedIn 
      </button>
      </Link>
      <Link to={''}>
      <button>
        Github
      </button>
      </Link>
      <Link to={''}>
      <button>
        Email
      </button>
      </Link>
      </div>
    </div>
  )
}
