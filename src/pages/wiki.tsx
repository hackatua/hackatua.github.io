import React from "react"
import { graphql, PageProps } from "gatsby"

import { ContentNode, WikiContent } from "../components/WikiContent"
import { WikiTitle } from "../components/WikiTitle.styled"
import { WikiBreadcrumb } from "../components/WikiBreadcrumb"

interface MarkdownRemarkNode {
  fields: { slug: string }
  id: string
  frontmatter: {
    title?: string
    index?: number
  }
}
interface Props extends PageProps {
  data: {
    allMarkdownRemark: {
      nodes: MarkdownRemarkNode[]
    }
  }
}

const WikiPage: React.VFC<Props> = ({ data, path }) => {
  const wikiContentNodes: ContentNode[] = mapMarkdownRemarkNodesToContentNodes(
    path,
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
          index
        }
      }
    }
  }
`

export default WikiPage

function mapMarkdownRemarkNodesToContentNodes(
  basePath: string,
  markdownRemarkNodes: MarkdownRemarkNode[]
): ContentNode[] {
  const contentNodes: ContentNode[] = []

  markdownRemarkNodes.forEach(markdownRemarkNode => {
    let actualContentNode: ContentNode

    markdownRemarkNode.fields.slug
      .replace(basePath, "")
      .split("/")
      .filter(Boolean)
      .forEach((slugSlice, index, slugSlices) => {
        const targetContentNodes =
          index === 0 ? contentNodes : actualContentNode.nodes

        const actualContentNodeFindResult = targetContentNodes.find(
          ({ path }) => path === calculatePath(basePath, slugSlices, index)
        )

        if (!actualContentNodeFindResult) {
          const newContentNode: ContentNode = {
            path: calculatePath(basePath, slugSlices, index),
            title: slugSlice,
            index: Number.POSITIVE_INFINITY,
            nodes: [],
          }

          targetContentNodes.push(newContentNode)

          actualContentNode = newContentNode
        } else {
          actualContentNode = actualContentNodeFindResult
        }

        if (index === slugSlices.length - 1) {
          Object.assign(actualContentNode, {
            title: markdownRemarkNode.frontmatter.title || slugSlice,
            index: Number.isInteger(markdownRemarkNode.frontmatter.index)
              ? markdownRemarkNode.frontmatter.index
              : Number.POSITIVE_INFINITY,
          })
        }
      })
  })

  return contentNodes
}

function calculatePath(basePath: string, slugSlices: string[], index): string {
  return `${basePath}${slugSlices.slice(0, index + 1).join("/")}/`
}
