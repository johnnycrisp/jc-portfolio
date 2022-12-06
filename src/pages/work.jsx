import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
// import Seo from '../components/Seo'
import ComponentSelector from '../components/ComponentSelector'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import {Button} from 'react-bootstrap'

const work = ({data}) => {
    const components = data.work.components
    console.log('work', components)

  return (
   <Layout>
    {/* <Seo title="Work" /> */}
    <div className="work__wrapper-hero">
      <div className="work__hero-left">
          <div className="work__title">
            <h1>
              <span className="letter">W</span>
              <span className="letter">o</span>
              <span className="letter">r</span>
              <span className="letter">k</span>
              <span className="letter">.</span>
          </h1>
          <p>A very humble selection of my most recent projects.</p>
          </div>
          
          <ul>
            <li>sam finney, dpo</li>
            <li>godzilla unfiltered</li>
            <li>nick & seb</li>
            <li>a space website</li>
            <li>obligatory to-do list</li>
          </ul>
          <div className="project__text">
              <h2>{components[0].projectTitle}</h2>
              <p>{components[0].projectText}</p>
              <div className="button-group">
                  <Button variant="outline-dark">Live Site</Button>
                  <Button variant="outline-dark">Github</Button>
              </div>
        </div>
      </div>
    <div className="project__wrapper-featured">
      <div className="project__image">
            <div>
                <GatsbyImage image={getImage(components[0].projectImage)} alt="ok"/>
            </div>
        </div>
        </div> 
    </div>
    <div className="work__wrapper">
    <ComponentSelector components={components} />
    </div>
    
  </Layout>
  )
}

export default work



export const query = graphql`
  query WorkQuery {
    work: datoCmsPage(pageSlug: { eq: "work" }) {
    title
    pageSlug
    components {
        componentId
      projectTitle
      projectText
      projectImage {
        gatsbyImageData(
          placeholder: BLURRED
          )
      }
    }
    }
  }`