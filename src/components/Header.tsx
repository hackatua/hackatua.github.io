import React from "react"
import {
  StyledHeader,
  StyledHeaderContent,
  StyledHeaderTitle,
} from "./Header.styles"

export const Header: React.FC = ({ children }) => (
  <StyledHeader>
    <StyledHeaderContent>
      <StyledHeaderTitle to="/">{children}</StyledHeaderTitle>
    </StyledHeaderContent>
  </StyledHeader>
)
