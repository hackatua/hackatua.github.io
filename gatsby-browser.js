import React from "react"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "styled-components"

import { Layout } from "./src/components/Layout"
import { GlobalStyles } from "./src/components/GlobalStyles"
import { theme } from "./src/theme"

import "prismjs/themes/prism-tomorrow.css"

export const wrapPageElement = ({ element }) => (
  <>
    <Helmet
      title="Hackatua"
      meta={[
        {
          name: "theme-color",
          media: "(prefers-color-scheme: dark)",
          content: "black",
        },
      ]}
    />
    <Layout>
      <GlobalStyles />
      {element}
    </Layout>
  </>
)

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
