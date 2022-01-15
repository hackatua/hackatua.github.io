import React from "react"
import "prismjs/themes/prism-tomorrow.css"
import { Layout } from "./src/components/Layout"

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>
