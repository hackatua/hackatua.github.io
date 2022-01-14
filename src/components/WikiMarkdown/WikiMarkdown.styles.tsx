import styled from "styled-components"
import bullet from "./bullet.png"

export const StyledWikiMarkdown = styled.div`
  width: 100%;
  -webkit-font-smoothing: antialiased;

  code[class*="language-"],
  pre[class*="language-"] {
    font-family: Hack;
    line-height: 1.3;
    font-size: 14px;
  }

  em {
    font-style: italic;
  }

  strong {
    font-weight: bold;
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

  ul {
    list-style-type: disc;
    padding-inline-start: 40px;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  ul ul {
    padding-inline-start: 20px;
    margin-block-start: 5px;
    margin-block-end: 5px;
  }

  ol {
    list-style-type: decimal;
    padding-inline-start: 40px;
  }

  ol ol {
    padding-inline-start: 20px;
    margin-block-start: 5px;
    margin-block-end: 5px;
  }

  ul li {
    list-style-image: url(${bullet});
  }

  blockquote {
    color: #aaa;
    padding-left: 10px;
    border-left: 1px dotted #666;
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
