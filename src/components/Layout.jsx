import * as React from "react"
import "../styles/main.scss"
import Footer from "./Footer"
import Nav from "./Nav"

const Layout = ({ children }) => {
  return (
    <div className="site-wrapper">
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout