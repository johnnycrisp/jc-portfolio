import React from 'react'
import './experience.scss'
import {BsPatchCheckFill} from 'react-icons/bs'
import {Link} from 'gatsby'

const Experience = () => {
  return (
  
    <section id="experience">
{/* // SKILLSET //  */}
    <div className="about__skillset">
            <h4>SKILLSET & EDUCATION</h4>
            <p className="skillset__text">I am a graduate frontend web developer (Treehouse Techdegree) currently delivering Jamstack websites to clients while also learning an MERN stack through the University of Helsinki's Full Stack Open programme. Below is a non-exhaustive list of my current frontend toolkit.</p>

        <div className="experience__content">
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
          
         


{/* // EXPERIENCE //  */}
            <div className="about__experience">
                <h4>EXPERIENCE</h4>
                <p className="about__text">I've had a few job titles over the years, including journalist, translator, UX copywriter, and technical writer. For the past 6+ years, I've been working hand-in-hand with executive, marketing, and dev teams to create seamless digital experiences.
                Formerly found at Chessable, Media Interactiva, NPAW, Spaceboost, Perdiz Magazine, and more!
              </p>
                  <div className="about__buttons">
                    <Link className="button__project">LinkedIn</Link>
                    <Link className="button__project">Download CV</Link>
                  </div>
            </div>

            {/* CONTACT */}

    </section>
  )
}

export default Experience