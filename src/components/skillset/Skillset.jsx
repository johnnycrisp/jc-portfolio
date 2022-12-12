import React from 'react'
import './skillset.scss'
import {BsPatchCheckFill} from 'react-icons/bs'

const Skillset = () => {
  return (
    <section id="experience">
    <div className="container experience__container">
    <div className="experience__backend">
        <h4>SKILLSET & EDUCATION</h4>
        <p>I am a graduate frontend web developer (Treehouse Techdegree) currently learning an MERN stack through the University of Helsinki's Full Stack Open programme, while also delivering Jamstack websites to clients. Below is a non-exhaustive list of my current frontend toolkit.</p>
      </div>
      <div className="experience__frontend">
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
  
    </div>
    </section>
  )
}

export default Skillset