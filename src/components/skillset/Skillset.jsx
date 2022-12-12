import React from 'react'
import './skillset.scss'
import {BsPatchCheckFill} from 'react-icons/bs'
import {Link} from 'gatsby'

const Skillset = () => {
  return (
    <section id="experience">
      <div className="container experience__container">
        <div className="about__skillset">
            <h4>SKILLSET & EDUCATION</h4>
            <p>I am a graduate frontend web developer (Treehouse Techdegree) currently learning an MERN stack through the University of Helsinki's Full Stack Open programme, while also delivering Jamstack websites to clients. Below is a non-exhaustive list of my current frontend toolkit.</p>

            <div className="experience__text">
              <div className="experience__content mt-2">
                <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                <p> REACT </p>
                </div>
                </article>

                <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                <p>GATSBY</p>
                </div>
                </article>

                <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                <p>DATOCMS</p>
                </div>
                </article>
            
                <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                <p>SCSS</p>
                </div>
                </article>

                <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                <p>GRAPHQL</p>
                </div>
                </article>

                <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                <p>BOOTSTRAP</p>
                </div>
                </article>

                <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                <p>NETLIFY</p>
                </div>
                </article>

                <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                <p>JAVASCRIPT</p>
                </div>
                </article>

                <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                <p>JIRA/AGILE</p>
                </div>
                </article>
              </div>
            
          </div>
        </div>
          
          <div className="about__experience">
            <div className="experience__skillset">
                <h4>EXPERIENCE</h4>
                <p>I've had a few job titles over the years, including journalist, translator, UX copywriter, and technical writer. For the past 6+ years, I've been working hand-in-hand with executive, marketing, and dev teams to create seamless digital experiences. </p>
                  <div className="about__buttons">
                  <Link className="button__project">LinkedIn</Link>
                  <Link className="button__project">Download CV</Link>
                  </div>
              </div>
              
              
          </div>
      
      </div>
    </section>
  )
}

export default Skillset