const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const {
  reporter,
} = require('gatsby/node_modules/gatsby-cli/lib/reporter/reporter')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const wikiPageTemplate = path.resolve('./src/templates/wiki-page.tsx')

  const wikiContentQueryResult = await graphql(`
    {
      allMarkdownRemark(filter: { fields: { contentType: { eq: "wiki" } } }) {
        nodes {
          fields {
            slug
          }
          id
        }
      }
    }
  `)

  if (wikiContentQueryResult.errors) {
    reporter.panicOnBuild(
      'There was an error loading wiki pages',
      wikiContentQueryResult.errors
    )
    return
  }

  const wikiPages = wikiContentQueryResult.data.allMarkdownRemark.nodes

  if (wikiPages.length) {
    wikiPages.forEach(wikiPage => {
      createPage({
        path: wikiPage.fields.slug,
        component: wikiPageTemplate,
        context: {
          id: wikiPage.id,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const {
      sourceInstanceName: contentType,
      birthTime,
      modifiedTime,
    } = getNode(node.parent)
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: 'contentType',
      value: contentType,
    })

    createNodeField({
      node,
      name: 'slug',
      value: `/${contentType}${slug}`,
    })

    createNodeField({
      node,
      name: 'birthTime',
      value: birthTime,
    })

    createNodeField({
      node,
      name: 'modifiedTime',
      value: modifiedTime,
    })
  }
}
