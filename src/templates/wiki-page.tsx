import React from 'react'
import { graphql } from 'gatsby'
import { WikiMarkdown } from '../components/WikiMarkdown'
import { WikiTitle } from '../components/WikiTitle.styled'
import { GatsbyWikiBreadcrumb } from '../components/WikiBreadcrumb'

interface Props {
  data: {
    markdownRemark: {
      fields: {
        slug: string
      }
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
      fields: { slug },
      frontmatter: { title },
      html,
    },
  } = data

  return (
    <>
      <GatsbyWikiBreadcrumb slug={slug} />
      {title && <WikiTitle>{title}</WikiTitle>}
      <WikiMarkdown content={html} />
    </>
  )
}

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
      html
    }
  }
`

export default WikiPage
