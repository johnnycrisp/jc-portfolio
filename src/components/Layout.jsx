import * as React from "react"
import "../styles/main.scss"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout