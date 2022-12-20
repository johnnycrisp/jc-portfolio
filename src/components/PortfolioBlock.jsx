import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import {Button} from 'react-bootstrap'

const PortfolioBlock = ({component, key}) => {
    console.log(component)
  return (
    <section className="project__wrapper" key={key}>
        <div className="project__image">
            <div>
                <GatsbyImage image={getImage(component.projectImage)} alt={key}/>
            </div>
        </div>
        <div className="project__text">
            
                <h2>{component.projectTitle}</h2>
                <p>{component.projectText}</p>
        <div>
            <a disabled={component.liveSite === "" && true} href={component.liveSite} target ="_blank" className="button__project">Live Site</a>
            <a disabled={component.github === "" && true} href={component.github} target ="_blank" className="button__project">Github</a>
        </div>
        </div> 
    </section>
  )
}

export default PortfolioBlock