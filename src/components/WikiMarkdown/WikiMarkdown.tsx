import React from "react"
import { StyledWikiMarkdown } from "./WikiMarkdown.styles"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

interface Props {
  content: string
}

export const WikiMarkdown: React.VFC<Props> = ({ content }) => (
  <StyledWikiMarkdown dangerouslySetInnerHTML={{ __html: content }} />
)
