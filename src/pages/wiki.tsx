import React from "react"
import { graphql , PageProps} from "gatsby"

import { ContentNode, WikiContent } from "../components/WikiContent"
import { WikiTitle } from "../components/WikiTitle.styled"
import { WikiBreadcrumb } from "../components/WikiBreadcrumb"

interface MarkdownRemarkNode {
  fields: { slug: string }
  id: string
  frontmatter: {
    title?: string
  }
}
interface Props extends PageProps{
  data: {
    allMarkdownRemark: {
      nodes: MarkdownRemarkNode[]
    }
  }
}

const WikiPage: React.VFC<Props> = ({ data, path}) => {
  const wikiContentNodes: ContentNode[] = mapMarkdownRemarkNodesToContentNodes(
    data.allMarkdownRemark.nodes
  )

  return (
    <>
<WikiBreadcrumb slug={path} />

      <WikiTitle>Hackatua's Wiki</WikiTitle>

      <p>Welcome to Hackatua Wiki Page!</p>

      <WikiContent content={wikiContentNodes} />
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

function mapMarkdownRemarkNodesToContentNodes(
  markdownRemarkNodes: MarkdownRemarkNode[]
): ContentNode[] {
  const contentNodes: ContentNode[] = []

  markdownRemarkNodes.forEach(markdownRemarkNode => {
    let actualContentNode: ContentNode

    markdownRemarkNode.fields.slug
      .split("/")
      .filter(Boolean)
      .slice(1)
      .forEach((slugSlice, index, slugSlices) => {
        const targetContentNodes =
          index === 0 ? contentNodes : actualContentNode.nodes

        const actualContentNodeFindResult = targetContentNodes.find(
          ({ path }) => path === calculatePartialPath(slugSlices, index)
        )

        if (!actualContentNodeFindResult) {
          const newContentNode: ContentNode = {
            path: calculatePartialPath(slugSlices, index),
            title: slugSlice,
            nodes: [],
          }

          targetContentNodes.push(newContentNode)

          actualContentNode = newContentNode
        } else {
          actualContentNode = actualContentNodeFindResult
        }

        if (index === slugSlices.length - 1) {
          actualContentNode.title =
            markdownRemarkNode.frontmatter.title || slugSlice
        }
      })
  })

  return contentNodes
}

function calculatePartialPath(slugSlices: string[], index): string {
  return `/wiki/${slugSlices.slice(0, index + 1).join("/")}/`
}
