import * as React from "react"
import "../styles/main.scss"
import Footer from "./Footer"
import Nav from "./Nav"
import OffcanvasNav from "./OffcanvasNav" 
import {AiOutlineMail, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'


const Layout = ({ children }) => {
  return (
    <>
    <div className="site-wrapper">
      <Nav />
      <OffcanvasNav />
      
      {children}
      
    </div>
    <Footer />
    </>
  )
}

export default Layout