import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'

const work = () => {
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
        <section className="work__image">
            <div>
                <StaticImage className="home__image" src="../assets/images/running.gif" alt="running man" />
            </div>
        </section>
        <section className="work__text">
            <div>
                <h2>Port Item Title</h2>
                <p>Port item text Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, mollitia.</p>
            </div>
        </section> 
    </div>
    
  </Layout>
  )
}

export default work