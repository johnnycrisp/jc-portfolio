import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { StaticImage } from 'gatsby-plugin-image'
import snoopy from '../assets/images/snoopy.jpg'

const about = () => {
  return (
    
    <Layout>
    {/* <Seo title="About" /> */}
   <div id="cursor"></div>
    <div id="cursor-border"></div>
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
                <p>Hi, I'm Johnny 👋. After 6+ years as a SaaS copywriter, I'm now focussed on creating very nice Jamstack websites. Based in Barcelona / London.</p>
            </div>
        </section>
        <section className="about__section">
            <div className="about__section-inner">
                <h4>Experience</h4>
                <ul>
                    <li>Chessable</li>
                    <li>Media Interactiva</li>
                    <li>NPAW</li>
                    <li>Spaceboost</li>
                    <li>Perdiz</li>
                    <li>And more...</li>
                </ul>
            </div>
            <div className="about__section-inner">
                {/* <h4>Contact</h4> */}
                <img src={snoopy} alt=''/>
            </div>
            <div className="about__section-inner">
            <h4>Tech</h4>
            <div className="tech__wrapper">
                <p>React, Gatsby, DatoCMS, Graphql, Netlify, Saas, Figma, Bootstrap, Jira, Git...</p>
                </div>
            </div>
        </section>
    </div>
  </Layout>
  )
}

export default about