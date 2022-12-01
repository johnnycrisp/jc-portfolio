import { graphql, Link } from 'gatsby'
import React from 'react'
import ComponentSelector from '../components/ComponentSelector'
import Layout from '../components/Layout'
import Seo from '../components/Seo'


const index = ({data}) => {
    console.log(data)
   const components = data?.datoCmsPage?.components
  return (
    <>
    <Layout>
    {/* <Seo title="Work" /> */}
    <h1>HOME PAGE</h1>
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