const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(({ data: { allMarkdownRemark: { edges } } }) => {
      const posts = edges
      posts.forEach(({ node: { frontmatter: { slug } } }) => {
        createPage({
          path: `/posts${slug}`,
          component: path.resolve(
            `${__dirname}/src/components/layout/postLayout.js`
          ),
          context: {
            slug
          }
        })
      })
      resolve()
    })
  })
}
