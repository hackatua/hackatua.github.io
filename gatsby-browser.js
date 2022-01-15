import React from "react"
import "prismjs/themes/prism-tomorrow.css"
import { Layout } from "./src/components/Layout"
import { GlobalStyles } from "./src/components/GlobalStyles"

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyles />
    {element}
  </>
)
