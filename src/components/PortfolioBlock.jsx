import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const PortfolioBlock = ({component, key}) => {
    console.log(component)
  return (
    <>
    <div key={key}>
    <p>{component.portfolioTitle}</p>
    <GatsbyImage image={getImage(component.portfolioImage)} />
    </div>
    </>
  )
}

export default PortfolioBlock