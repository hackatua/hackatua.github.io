import styled from "styled-components"

export const StyledWikiMarkdown = styled.div`
  width: 100%;
  -webkit-font-smoothing: antialiased;

  code[class*="language-"], pre[class*="language-"] {
    font-family: Hack;
    line-height: 1.3;
    font-size: 14px;
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
