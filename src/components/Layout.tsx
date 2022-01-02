import React from "react"
import { GlobalStyles } from "./GlobalStyles"
import { StyledLayout } from "./Layout.styles"

export const Layout: React.FC = ({ children }) => (
  <StyledLayout>
    <GlobalStyles />
    {children}
  </StyledLayout>
)
