import React from 'react'
import { Link } from 'gatsby'

const Nav = () => {
  return (
    <div className="nav__wrapper">
      <nav className="center__nav">
        <ul>
          <li>
            <span>01</span>
            <Link to="/">Home</Link>
          </li>
          <li>
            <span>02</span>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <span>03</span>
            <Link to="/about">About</Link>
          </li>
          <li>
            <span>04</span>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav