import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, {useState} from 'react'
import {GiStarShuriken, GiDuck} from 'react-icons/gi'
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
    <header><p>johnny crisp</p><GiDuck /><p>frontend dev</p></header>
      <div className="hello__wrapper">
          <h1>
        <span className="letter">H</span>
        <span className="letter">e</span>
        <span className="letter">l</span>
        <span className="letter">l</span>
        <span className="letter">o</span>
        <span className="letter">&nbsp;</span>
        <span className="letter">t</span>
        <span className="letter">h</span>
        <span className="letter">e</span>
        <span className="letter">r</span>
        <span className="letter">e</span>
        <span className="letter">.</span></h1>
        {/* <p className="subtitle">I'm Johnny</p> */}
      </div>
    
       <Nav />
       <section className="home__lower">
       <div className="home__desc">
        <GiStarShuriken />
        <p>A FORMER UX COPYWRITER</p>
       </div>
      <div className="image__wrapper-home">
        <StaticImage className="home__image" src="../assets/images/running.gif" alt="running man" />
      </div>
      <div className="home__desc">
        <GiStarShuriken />
        <p>MAKING JAMSTACK WEBSITES</p>
      </div>
      </section>
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

  