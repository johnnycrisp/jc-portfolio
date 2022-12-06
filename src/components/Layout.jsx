import * as React from "react"
import "../styles/main.scss"
import Footer from "./Footer"
import Nav from "./Nav"
import OffcanvasNav from "./OffcanvasNav"


const Layout = ({ children }) => {
  return (
    <>
    <div className="site-wrapper">
      <Nav />
      <OffcanvasNav />
      
      {children}
      <Footer />
    </div>
    </>
  )
}

export default Layout