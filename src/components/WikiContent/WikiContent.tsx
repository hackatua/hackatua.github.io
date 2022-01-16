import React from "react"
import { Link } from "gatsby"
import { ContentNode } from "./WikiContent.models"

import {
  StyledWikiContent,
  StyledWikiContentBlock,
  StyledWikiContentItem,
  StyledWikiContentLink,
  StyledWikiContentTitle,
} from "./WikiContent.styles"

interface WikiContentItemProps {
  contentNode: ContentNode
}
const WikiContentItem: React.FC<WikiContentItemProps> = ({
  contentNode: { path, title, nodes },
}) => (
  <StyledWikiContentItem>
    <StyledWikiContentLink to={path}>{title}</StyledWikiContentLink>

    {nodes.length > 0 && (
      <StyledWikiContentBlock>
        {nodes.map(contentNode => (
          <WikiContentItem contentNode={contentNode} key={contentNode.path} />
        ))}
      </StyledWikiContentBlock>
    )}
  </StyledWikiContentItem>
)

interface WikiContentProps {
  content: ContentNode[]
}

export const WikiContent: React.VFC<WikiContentProps> = ({ content }) => {
  if (!content.length) {
    return null
  }

  return (
    <StyledWikiContent>
      <StyledWikiContentTitle>Content</StyledWikiContentTitle>

      <StyledWikiContentBlock>
        {content.map(contentNode => (
          <WikiContentItem contentNode={contentNode} key={contentNode.path} />
        ))}
      </StyledWikiContentBlock>
    </StyledWikiContent>
  )
}
