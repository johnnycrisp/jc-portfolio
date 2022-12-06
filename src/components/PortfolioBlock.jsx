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
        <div className="button-group">
            <Button variant="outline-dark">Live Site</Button>
            <Button variant="outline-dark">Github</Button>
        </div>
        </div> 
    </section>
  )
}

export default PortfolioBlock