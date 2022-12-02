import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { StaticImage } from 'gatsby-plugin-image'

const about = () => {
  return (
   <Layout>
    {/* <Seo title="About" /> */}
    <h1>
        <span className="letter">A</span>
        <span className="letter">b</span>
        <span className="letter">o</span>
        <span className="letter">u</span>
        <span className="letter">t</span>
        <span className="letter">.</span>
    </h1>
    <div className="work__wrapper">
        <section className="work__image">
            <div>
                <StaticImage className="home__image" src="../assets/images/snoopy.jpg" alt="running man" />
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

export default about