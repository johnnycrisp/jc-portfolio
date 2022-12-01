// import React from "react"
// import { graphql } from "gatsby"
// import Seo from "../components/seo"
// import Layout from "../components/layout"
// import ComponentSelector from "../ComponentSelector"

// export default function Page({ data, pageContext }) {
//   const { pageTitle, pageSlug } = pageContext
//   const { components } = data.page.nodes[0]

//   return (
//     <Layout>
//       <Seo title={pageTitle} />
//       <ComponentSelector components={components} />
//     </Layout>
//   )
// }

// export const query = graphql`
//   query ($pageSlug: String!) {
//     page: allDatoCmsPage(filter: { pageSlug: { eq: $pageSlug } }) {
//       nodes {
//         pageSlug
//         pageTitle
//         id
//         components {
//           ... on DatoCmsFeaturedShopBanner {
//             componentId
//             headline
//             summary
//             button {
//               buttonLink
//               buttonText
//             }
//             featuredImages {
//               title
//               gatsbyImageData(placeholder: BLURRED)
//             }
//           }
//           ... on DatoCmsVideoSection {
//             componentId
//             imageOverlay {
//               gatsbyImageData(placeholder: BLURRED)
//             }
//             videoUrl
//           }
//           ... on DatoCmsTextAndPhotoBlock {
//             componentId
//             hasImage
//             heading
//             imageAlignment
//             textBlock
//             image {
//               gatsbyImageData(placeholder: BLURRED)
//             }
//           }
//           ... on DatoCmsContactFormSection {
//             componentId
//             leftText
//           }
//           ... on DatoCmsBlogPagePostCollection {
//             componentId
//           }
//           ... on DatoCmsPageIntro {
//             componentId
//             introduction
//             heading
//           }
//           ... on DatoCmsAccordion {
//             componentId
//             items {
//               innerTextAnswer
//               outerTextQuestion
//             }
//           }
//           ... on DatoCmsParallaxCta {
//             componentId
//             button {
//               buttonText
//               buttonLink
//             }
//             text
//             backgroundImage {
//               gatsbyImageData(placeholder: BLURRED)
//             }
//           }
//           ... on DatoCmsSocialMediaBlock {
//             componentId
//             curatorFeedId
//             heading
//           }
//         }
//       }
//     }
//   }
// `