import React, {useState} from 'react'
import { Link } from 'gatsby'
import {GiStarShuriken, GiDuck} from 'react-icons/gi'

const Nav = () => {
  const [isHovering, setIsHovering] = useState(false);
  // const [isCurrentPage, setIsCurrentPage] = useState('home');

   const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  // const handlePageChange = () => {
  //   if(isCurrentPage) {
      
  //   }
  // };

  return (
    <div data-cursor="pointer" className={ isHovering ? "nav__wrapper display" : "nav__wrapper"}>
      <nav className="center__nav">
        <ul>
          <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <span className={ isHovering ? "menu__item-expanded" : ""}>02</span>
            <Link className={ isHovering ? "menu__item-expanded" : ""} to="/about">About</Link>
          </li>
          
          <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <span className={ isHovering ? "menu__item-expanded" : ""}>01</span>
            <Link className={ isHovering ? "menu__item-expanded" : ""} to="/">Home</Link>
          </li>
          <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <span className={ isHovering ? "menu__item-expanded" : ""}>03</span>
            <Link className={ isHovering ? "menu__item-expanded" : ""} to="/work">Work</Link>
          </li>
      
          {/* <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <span className={ isHovering ? "menu__item-expanded" : ""}>04</span>
            <Link className={ isHovering ? "menu__item-expanded" : ""} to="/contact">Contact</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}

export default Nav