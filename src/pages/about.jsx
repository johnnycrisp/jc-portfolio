import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { StaticImage } from 'gatsby-plugin-image'

const about = () => {
  return (
    <div className="about__page-wrapper">
    <Layout>
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
        <section className="about__image">
            <div>
                <StaticImage className="about__image" src="../assets/images/snoopy.jpg" alt="running man" />
            </div>
        </section>
        <section className="about__text">
            <div>
                <h2>Experience</h2>
                <p>I've had a few job titles over the years, including journalist, translator, UX copywriter, and technical writer. For the past 6+ years, I've been working hand-in-hand with executive, marketing, and dev teams to create seamless digital experiences.</p>
            </div>
        </section>
        <section className="about__image">
            <div>
                <StaticImage className="about__image" src="../assets/images/snoopy.jpg" alt="running man" />
            </div>
        </section>
        <section className="about__text">
            <div>
                <h2>Education</h2>
                <p>I am a Treehouse Techdegree Frontend Web Development graduate who is also currently learning a MERN stack via the University of Helsinki's Full Stack Open programme.</p>
            </div>
        </section> 
         <section>
            <h2>Skills</h2>
         </section>
    </div>
  </Layout>
  </div>
  )
}

export default about