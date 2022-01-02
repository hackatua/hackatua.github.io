import React from "react"
import { GlobalStyles } from "./GlobalStyles"

export const Layout: React.FC = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
)
