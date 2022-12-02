import * as React from "react"
import "../styles/main.scss"
import Footer from "./Footer"
import Nav from "./Nav"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default Layout