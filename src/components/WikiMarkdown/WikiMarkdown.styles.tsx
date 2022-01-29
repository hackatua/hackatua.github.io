import styled from 'styled-components'
import bullet from '../../images/bullet.png'

export const StyledWikiMarkdown = styled.div`
  width: 100%;
  -webkit-font-smoothing: antialiased;

  code[class*='language-'],
  pre[class*='language-'] {
    font-family: Hack;
    line-height: 1.3;
    font-size: 14px;
  }

  p {
    text-indent: 30px;
    margin: 10px 0 15px 0;
  }

  a {
    color: ${p => p.theme.colors.inchworm};
    text-decoration: underline;
    transition: text-shadow 0.15s ease-out;
  }

  a:hover {
    text-shadow: 0 0 2px ${p => p.theme.colors.inchworm},
      0 0 4px ${p => p.theme.colors.inchworm};
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
    color: ${p => p.theme.colors.inchworm};
    margin: 20px 0 10px;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.75em;
  }

  h3 {
    font-size: 1.5em;
  }

  h4 {
    font-size: 1.25em;
  }

  h5 {
    font-size: 1em;
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
    color: ${p => p.theme.colors.plaster};
    padding-left: 10px;
    border-left: 1px dotted ${p => p.theme.colors.squant};
  }

  table {
    width: 100%;
    margin: 0 0 20px 0;
  }

  th {
    text-align: left;
    border-bottom: 1px dashed ${p => p.theme.colors.inchworm};
    padding: 5px 10px;
  }

  td {
    padding: 5px 10px;
  }

  hr {
    height: 0;
    border: 0;
    border-bottom: 1px dashed ${p => p.theme.colors.inchworm};
    color: ${p => p.theme.colors.inchworm};
  }

  aside {
    margin: 10px 0;
    padding: 10px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
`
