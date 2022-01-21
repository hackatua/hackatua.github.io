import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { WikiBreadcrumb, SlugToTitleDictionary } from './WikiBreadcrumb'

interface MarkdownRemarkNode {
  fields: { slug: string }
  frontmatter: {
    title?: string
  }
}

interface QueryData {
  allMarkdownRemark: {
    nodes: MarkdownRemarkNode[]
  }
}

interface Props {
  slug: string
}

export const GatsbyWikiBreadcrumb: React.VFC<Props> = ({ slug }) => {
  const queryData = useStaticQuery<QueryData>(query)
  const slugToTitleDictionary: SlugToTitleDictionary =
    mapQueryDataToSlugToTitleDictionary(queryData)

  return (
    <WikiBreadcrumb slug={slug} slugToTitleDictionary={slugToTitleDictionary} />
  )
}

const query = graphql`
  query {
    allMarkdownRemark(filter: { fields: { contentType: { eq: "wiki" } } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`

function mapQueryDataToSlugToTitleDictionary(
  queryData: QueryData
): SlugToTitleDictionary {
  const slugToTitleDictionary: SlugToTitleDictionary = {}

  queryData.allMarkdownRemark.nodes.forEach(markdownRemarkNode => {
    if (markdownRemarkNode.frontmatter.title) {
      slugToTitleDictionary[markdownRemarkNode.fields.slug] =
        markdownRemarkNode.frontmatter.title
    }
  })

  return slugToTitleDictionary
}
