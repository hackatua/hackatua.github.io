import React from "react"
import { Header } from "../Header"
import { StyledLayout } from "./Layout.styles"

export const Layout: React.FC = ({ children }) => (
  <>
    <Header>Hackatua</Header>
    <StyledLayout>{children}</StyledLayout>
  </>
)
