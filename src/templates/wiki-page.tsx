import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { WikiMarkdown } from "../components/WikiMarkdown"

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        title?: string
      }
      html
    }
  }
}

const WikiPage: React.VFC<Props> = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
  } = data

  return (
    <Layout>
      {title && <h1>{title}</h1>}
      <WikiMarkdown content={html} />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default WikiPage
