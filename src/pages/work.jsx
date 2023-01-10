import React, {useState, useEffect} from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ComponentSelector from '../components/ComponentSelector'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import {Button} from 'react-bootstrap'
import SEO from '../components/Seo'

const Work = ({data}) => {
    const components = data.work.components
    console.log('work', components.flat())


const [ball, setBall] = useState(true)

const [project, setProject] = useState(0)

// const changeProject = (delta) => {

//   if(delta === 1 ) { 
//     setProject(project += 1) } else {
//       setProject(project -= 1)
//     }
// }

const handleBall = () => {
  if (ball) {
const cursor = document.querySelector("#cursor")
const cursorBorder = document.querySelector("#cursor-border")
const cursorPos = { x: 0, y: 0 }
const cursorBorderPos = { x: 0, y: 0 }

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX
  cursorPos.y = e.clientY

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
})

requestAnimationFrame(function loop() {
  const easting = 8
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`
  requestAnimationFrame(loop)
})

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    // if (item.dataset.cursor === "pointer") {
    //   cursorBorder.style.backgroundColor = "white"
    //   cursorBorder.style.setProperty("--size", "30px")
    // }
    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.backgroundColor = "white"
      cursor.style.opacity = "0"
      cursorBorder.style.mixBlendMode = "difference"
      cursorBorder.style.setProperty("--size", "60px")
    }
  });
  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "unset";
    cursorBorder.style.setProperty("--size", "50px");
    cursor.style.opacity = "1"
  });
});

} }

useEffect(()=> {
  handleBall()
}, []
)

  return (
   <Layout>
   <Seo title="Work"/>
  <div id="cursor"></div>
  <div id="cursor-border"></div>
    {/* <Seo title="Work" /> */}
    <div className="work__wrapper-hero">
      <div className="work__hero-left">
          {/* <div className="work__title">
            <h1>
              <span className="letter">W</span>
              <span className="letter">o</span>
              <span className="letter">r</span>
              <span className="letter">k</span>
              <span className="letter">.</span>
          </h1>
          <p>A very humble selection of my most recent projects.</p>
          </div> */}
          
          {/* <ul>
            <li>sam finney, dpo</li>
            <li>godzilla unfiltered</li>
            <li>nick & seb</li>
            <li>a space website</li>
            <li>obligatory to-do list</li>
          </ul> */}
          <div className="project__text">
              <h2>{components[project].projectTitle}</h2>
              <p>{components[project].projectText}</p>
              <div>
                  <a disabled = {components[project].liveSite === "" && true} href={components[project].liveSite} target ="_blank" className="button__project">Live Site</a>
                  <a disabled = {components[project].github === "" && true} href={components[project].github} target ="_blank" className="button__project">Github</a>
              </div>
        </div>
      </div>
    <div className="project__wrapper-featured">
      
        <div className="project__image">
        <button className="align-self-start mb-3 button__project-left" disabled = {project === 0 && true} onClick={()=> setProject( project - 1)}>Previous</button>
  
        <GatsbyImage image={getImage(components[project].projectImage)} alt="ok"/>
    
        <button className="align-self-end mt-3 button__project" disabled = {project === components.length -1 && true} onClick={()=> setProject(project + 1)}>Next</button>
        </div>
      
        </div> 
    </div>
    <div className="work__wrapper">
    <ComponentSelector components={components} />
    </div>
    
  </Layout>
  )
}

export default Work



export const query = graphql`
  query WorkQuery {
  work: datoCmsPage(pageSlug: {eq: "work"}) {
    title
    pageSlug
    components {
      componentId
      liveSite
      github
      projectText
      projectTitle
      projectImage {
        fluid(maxWidth: 600) {
          base64
          tracedSVG
          width
          height
          src
        }
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
}`