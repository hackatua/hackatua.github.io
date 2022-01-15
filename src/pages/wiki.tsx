import React from "react"
import { graphql, Link } from "gatsby"

interface Props {
  data: {
    allMarkdownRemark: {
      nodes: {
        fields: { slug: string }
        id: string
        frontmatter: {
          title?: string
        }
      }[]
    }
  }
}

const WikiPage: React.VFC<Props> = ({ data }) => {
  return (
    <>
      <h2>Wiki Page!</h2>
      <h3>Content</h3>
      <ul>
        {data.allMarkdownRemark.nodes.map(node => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fields: { contentType: { eq: "wiki" } } }) {
      nodes {
        fields {
          slug
        }
        id
        frontmatter {
          title
        }
      }
    }
  }
`

export default WikiPage
