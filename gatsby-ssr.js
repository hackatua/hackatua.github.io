import React from "react"
import { ThemeProvider } from "styled-components"

import { Layout } from "./src/components/Layout"
import { GlobalStyles } from "./src/components/GlobalStyles"
import { theme } from "./src/theme"

import "prismjs/themes/prism-tomorrow.css"

export const wrapPageElement = ({ element }) => (
  <Layout>
    <GlobalStyles />
    {element}
  </Layout>
)

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
