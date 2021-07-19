const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    
    const {data} = await graphql(`
      query HealthArticles {
        allMarkdownRemark {
          nodes {
            frontmatter {
              title
              tag
              slug
              image {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                }
              }
            }
            html
          }
        }
      }
      
    `)

    data.allMarkdownRemark.nodes.forEach(item => {
        actions.createPage({
            path: item.frontmatter.slug,
            component: path.resolve(`src/templates/article.js`),
            context: {slug: item.frontmatter.slug}
        })
    })
}