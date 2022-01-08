import styled from "styled-components"

export const StyledWikiMarkdown = styled.div`
  & code {
    background: rgba(0, 0, 0, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 0px 4px;
    color: #b5e853;
    border-radius: 5px;
    font-family: Hack;
    margin: 0 -2px;
  }
  & deckgo-highlight-code {
    --deckgo-highlight-code-background: rgba(0, 0, 0, 0.9);
    --deckgo-highlight-code-padding: 10px;
    --deckgo-highlight-code-border-radius: 10px;
    --deckgo-highlight-code-font-family: Hack;
    --deckgo-highlight-code-font-size: 0.8em;
  }
`
