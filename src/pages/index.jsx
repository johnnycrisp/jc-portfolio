import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
// import ComponentSelector from '../components/ComponentSelector'
import Footer from '../components/Footer'
// import Layout from '../components/Layout'
import Nav from '../components/Nav'
// import Seo from '../components/Seo'


const index = ({data}) => {
    console.log(data)
   const components = data?.datoCmsPage?.components
  return (
    <>
    {/* <Seo title="Work" /> */}
    <div className="home__wrapper">
    <header><p>johnny crisp</p><p>frontend dev</p></header>
      <h1>
      <span className="letter">H</span>
      <span className="letter">e</span>
      <span className="letter">l</span>
      <span className="letter">l</span>
      <span className="letter">o</span>
      <span className="letter">.</span></h1>
      <p className="subtitle">I am a frontend web developer.</p>
       <Nav />
      <div className="image__wrapper-home">
        <StaticImage className="home__image" src="../assets/images/running.gif" alt="running man" />
      </div>    
   
    </div>
    <Footer />
    </>
  )
}

export default index

export const query = graphql`
  query HomeQuery {
    page: datoCmsPage(pageSlug: { eq: "home" }) {
    title
    pageSlug
    components {
        componentId
      portfolioTitle
      portfolioImage {
        gatsbyImageData
      }
    }
    }
  }`

  // <StaticImage className="nav__logo" src="../assets/images/snoopy.jpg" alt="running man" />