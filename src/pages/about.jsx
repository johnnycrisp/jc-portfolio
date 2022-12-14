import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { StaticImage } from 'gatsby-plugin-image'
import snoopy from '../assets/images/snoopy.jpg'
import Experience from '../components/experience/Experience'
import {AiFillMail, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {SiLichess} from 'react-icons/si'
import Testimonials from '../components/testimonials/Testimonials'


const About = () => {

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

  return (
    
    <Layout>
    <Seo title="About"/>
        <div id="cursor"></div>
    <div id="cursor-border"></div>
    {/* <Seo title="About" /> */}
   
    {/* <h1>
        <span className="letter">A</span>
        <span className="letter">b</span>
        <span className="letter">o</span>
        <span className="letter">u</span>
        <span className="letter">t</span>
        <span className="letter">.</span>
    </h1> */}
    <div className="about__wrapper">
        <section className="about__intro">
            <div className="about__text">
                <p>Hi, I'm Johnny ????. After 6+ years as a SaaS copywriter, I'm now a React developer creating very nice Jamstack websites. Based in Barcelona / London.</p>
            </div>
        </section>
        {/* <Skillset /> */}
        <section className="about__section">
        <h3>ABOUT</h3>
    
        
            {/* <div className="about__section-inner">
                <h4>EXPERIENCE</h4>
                <ul>
                    <li>Chessable</li>
                    <li>Media Interactiva</li>
                    <li>NPAW</li>
                    <li>Spaceboost</li>
                    <li>Perdiz</li>
                    <li>And more...</li>
                </ul>
            </div> */}
            {/* <div className="about__section-inner">
                <h4>Contact</h4>
                <img src={snoopy} alt=''/>
            </div> */}
            {/* <div className="about__section-inner">
            <h4>SKILLSET</h4>
            <div className="tech__wrapper">
                <p>React, Gatsby, DatoCMS, Graphql, Netlify, SCSS, Figma, Bootstrap, Jira, Git...</p>
                </div>
            </div> */}
            <Experience />
            
        </section>
        <Testimonials  />
       <div className="contact__section">
       <h3>CONTACT</h3>
<a className="button__project contact__button" href="mailto:johnnycrisp2@gmail.com?subject=Hi!&body=Nice%20website%20Johnny,"
                target="_blank"><AiFillMail/>EMAIL ME</a><a className="button__project contact__button" href="https://www.linkedin.com/in/johnny-c-a5737a14b/" target="_blank"><AiFillLinkedin/>LINKEDIN</a><a className="button__project contact__button" href="mailto:johnnycrisp2@gmail.com?subject=Hi!&body=Nice%20website%20Johnny,"
                target="_blank"><AiFillMail/>EMAIL ME</a><a className="button__project contact__button" href="https://github.com/johnnycrisp" target="_blank"><AiFillGithub/>GITHUB</a>
<a className="button__project contact__button" href="mailto:johnnycrisp2@gmail.com?subject=Hi!&body=Nice%20website%20Johnny,"
                target="_blank"><AiFillMail/>EMAIL ME</a><a className="button__project contact__button" href="https://lichess.org/@/johnnnnnny"
                target="_blank"><SiLichess/>LET'S PLAY CHESS</a>
       </div>
              
    </div>
  </Layout>
  )
}

export default About