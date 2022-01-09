import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { WikiMarkdown } from "../components/WikiMarkdown"
import { WikiTitle } from "../components/WikiTitle.styled"

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
      {title && <WikiTitle>{title}</WikiTitle>}
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
