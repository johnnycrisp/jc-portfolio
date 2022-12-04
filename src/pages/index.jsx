import { graphql } from 'gatsby'
// import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import {GiStarShuriken, GiDuck} from 'react-icons/gi'
// import ComponentSelector from '../components/ComponentSelector'
import Footer from '../components/Footer'
// import Layout from '../components/Layout'
import Nav from '../components/Nav'
// import Seo from '../components/Seo'
import RunningGif from '../assets/images/running.gif'


const index = ({data}) => {
    console.log('index', data)
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
        <p className="subtitle mt-2">I'm Johnny</p>
      </div>
    
       <Nav />
       <section className="home__lower">
       <div className="home__desc">
        <GiStarShuriken />
        <p>A SAAS COPYWRITER FOR 5+ YEARS</p>
       </div>
      <div className="image__wrapper-home">
        <img className="home__image" src={RunningGif} alt="running man" />
      </div>
      <div className="home__desc">
        <GiStarShuriken />
        <p>NOW MAKING VERY NICE WEBSITES</p>
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
      projectTitle
      projectText
      projectImage {
        gatsbyImageData
      }
    }
    }
  }`

  