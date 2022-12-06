import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
// import Seo from '../components/Seo'
import ComponentSelector from '../components/ComponentSelector'
// import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'

const work = ({data}) => {
    const components = data.work.components
    console.log('work', components)

  return (
   <Layout>
    {/* <Seo title="Work" /> */}
    
      <h1>
        <span className="letter">W</span>
        <span className="letter">o</span>
        <span className="letter">r</span>
        <span className="letter">k</span>
        <span className="letter">.</span>
    </h1>
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