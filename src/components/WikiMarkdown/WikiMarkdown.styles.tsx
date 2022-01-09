import styled from "styled-components"

export const StyledWikiMarkdown = styled.div`
  width: 100%;
  -webkit-font-smoothing: antialiased;

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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #b5e853;
    margin: 20px 0 10px;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 18px;
  }

  h4 {
    font-size: 14px;
  }

  h5 {
    font-size: 12px;
    text-transform: uppercase;
    margin: 0 0 5px 0;
  }

  h6 {
    font-size: 12px;
    text-transform: uppercase;
    color: #999;
    margin: 0 0 5px 0;
  }

  dt {
    font-style: italic;
    font-weight: bold;
  }

  ul li {
    list-style-image: url("../images/bullet.png");
  }

  blockquote {
    color: $blockquote-color;
    padding-left: 10px;
    border-left: 1px dotted $blockquote-border;
  }

  pre {
    background: rgba(0, 0, 0, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 10px;
    font-size: 16px;
    color: #b5e853;
    border-radius: 2px;
    word-wrap: normal;
    overflow: auto;
    overflow-y: hidden;
  }

  table {
    width: 100%;
    margin: 0 0 20px 0;
  }

  th {
    text-align: left;
    border-bottom: 1px dashed #b5e853;
    padding: 5px 10px;
  }

  td {
    padding: 5px 10px;
  }

  hr {
    height: 0;
    border: 0;
    border-bottom: 1px dashed #b5e853;
    color: #b5e853;
  }
`
