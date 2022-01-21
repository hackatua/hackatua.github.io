import React from 'react'
import { StyledWikiMarkdown } from './WikiMarkdown.styles'
interface Props {
  content: string
}

export const WikiMarkdown: React.VFC<Props> = ({ content }) => (
  <StyledWikiMarkdown dangerouslySetInnerHTML={{ __html: content }} />
)
