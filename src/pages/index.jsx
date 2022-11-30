import { graphql } from 'gatsby'
import React from 'react'
import ComponentSelector from '../components/ComponentSelector'
import Layout from '../components/Layout'

const index = ({data}) => {
    console.log(data)
   const components = data?.datoCmsPage?.components
  return (
    <>
    <Layout>
    <ComponentSelector components={components} />
    </Layout>
    </>
  )
}

export default index

export const query = graphql`
  query HomeQuery {
    page: datoCmsPage(pageSlug: { eq: "home" }) {
    title
    pageSlug
    components {
        componentId
      portfolioTitle
      portfolioImage {
        gatsbyImageData
      }
    }
    }
  }`