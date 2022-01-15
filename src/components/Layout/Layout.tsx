import React from "react"
import { GlobalStyles } from "../GlobalStyles"
import { Header } from "../Header"
import { StyledLayout } from "./Layout.styles"

export const Layout: React.FC = ({ children }) => (
  <>
    <GlobalStyles />
    <Header>Hackatua</Header>
    <StyledLayout>{children}</StyledLayout>
  </>
)
