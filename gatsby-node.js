// const path = require(`path`)

// const createPages = async (graphql, actions) => {
//   // 1. Get template
//   const pageTemplate = path.resolve("./src/templates/Page.jsx")
//   // 2. Query all Pages
//   const { data } = await graphql(`
//     query {
//       pages: allDatoCmsPage {
//         nodes {
//           pageSlug
//           pageTitle
//           id
//         }
//       }
//     }
//   `)

//   // 3. Loop through Pages and create a page
//   data.pages.nodes.forEach(node => {
//     actions.createPage({
//       path: `/${node.pageSlug}`,
//       component: pageTemplate,
//       context: {
//         id: node.id,
//         pageTitle: node.pageTitle,
//         pageSlug: node.pageSlug,
//       },
//     })
//   })
// }

// // BLOG POSTS

// const createPosts = async (graphql, actions) => {
//   // 1. Get template
//   const postTemplate = path.resolve("./src/templates/Post.jsx")
//   // 2. Query all Pages
//   const { data } = await graphql(`
//     query {
//       posts: allDatoCmsBlogPost {
//         nodes {
//           pageSlug
//           pageTitle
//           id
//         }
//       }
//     }
//   `)

//   // 3. Loop through Pages and create a page
//   data.posts.nodes.forEach(node => {
//     actions.createPage({
//       path: `/studio-blog/${node.pageSlug}`,
//       component: postTemplate,
//       context: {
//         id: node.id,
//         pageTitle: node.pageTitle,
//         pageSlug: node.pageSlug,
//       },
//     })
//   })
// }

// exports.createPages = async ({ graphql, actions }) => {
//   await createPosts(graphql, actions)
//   await createPages(graphql, actions)
// }

// exports.onCreateWebpackConfig = ({ actions, stage }) => {
//   if (stage === "build-javascript") {
//     // turn off source-maps
//     actions.setWebpackConfig({
//       devtool: false,
//     })
//   }
// }