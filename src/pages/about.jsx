import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { StaticImage } from 'gatsby-plugin-image'

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
        <section>
            <div className="about__image">
                <StaticImage className="about__image" src="../assets/images/snoopy.jpg" alt="running man" />
            </div>
            <div className="about__text">
                <h2>Experience</h2>
                <p>I've had a few job titles over the years, including journalist, translator, UX copywriter, and technical writer. For the past 6+ years, I've been working hand-in-hand with executive, marketing, and dev teams to create seamless digital experiences.</p>
            </div>
        </section>
        <section>
             <div className="about__image">
                <StaticImage className="about__image" src="../assets/images/snoopy.jpg" alt="running man" />
            </div>
            <div className="about__text">
                <h2>Skills</h2>
                <p>I've had a few job titles over the years, including journalist, translator, UX copywriter, and technical writer. For the past 6+ years, I've been working hand-in-hand with executive, marketing, and dev teams to create seamless digital experiences.</p>
            </div>
        </section>
    </div>
  </Layout>
  )
}

export default about