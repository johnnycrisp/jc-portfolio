import { graphql, Link } from 'gatsby'
// import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import {GiStarShuriken, GiDuck} from 'react-icons/gi'
// import ComponentSelector from '../components/ComponentSelector'
import Footer from '../components/Footer'
// import Layout from '../components/Layout'
import Nav from '../components/Nav'
import OffcanvasNav from '../components/OffcanvasNav'
// import Seo from '../components/Seo'
import RunningGif from '../assets/images/running.gif'



const Index = ({data}) => {

const [ball, setBall] = useState(true)

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

    console.log('index', data)
   const components = data?.datoCmsPage?.components
  return (
    <>
    {/* <Seo title="Work" /> */}
  <div id="cursor"></div>
  <div id="cursor-border"></div> 
  <div className="site-wrapper">
  <OffcanvasNav />
    <Nav />
  <div className="x">
              <img className="y" src={RunningGif} alt="running man" />
            </div>
      <div className="home__wrapper">
     
        
            <div className="hello__wrapper">
                <h1>
              <span className="letter">H</span>
              <span className="letter">e</span>
              <span className="letter">l</span>
              <span className="letter">l</span>
              <span className="letter">o</span>
              {/* <span className="letter">&nbsp;</span>
              <span className="letter">t</span>
              <span className="letter">h</span>
              <span className="letter">e</span>
              <span className="letter">r</span>
              <span className="letter">e</span> */}
              <span className="letter">.</span></h1>
                <div className="home__questions">
                  <Link to="/about" className="button__project-left mt-2">who are you</Link>
                  <Link to="/work" className="button__project mt-2">what are you doing</Link>
                </div>
              
             </div>

            {/* <header><p>johnny crisp</p><GiDuck /><p>frontend dev</p></header> */} 
            {/* <section className="home__lower">
            <div className="home__desc x">
            <div className="y">
              <GiStarShuriken />
              <p>A SAAS COPYWRITER FOR 5+ YEARS</p>
              </div>
            </div>
            <div className="image__wrapper-home">
              <img className="home__image" src={RunningGif} alt="running man" />
            </div>
            <div className="home__desc x">
              <div className="y">
              <GiStarShuriken />
              <p>NOW MAKING VERY NICE WEBSITES</p>
              </div>
            </div>
            </section> */}
          </div>
    </div>
    <Footer />
    </>
  )
}

export default Index

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

  