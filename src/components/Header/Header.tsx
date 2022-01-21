import React from 'react'
import {
  StyledHeader,
  StyledHeaderContent,
  StyledHeaderNavbar,
  StyledHeaderNavLink,
  StyledHeaderTitle,
} from './Header.styles'

export const Header: React.FC = ({ children }) => (
  <StyledHeader>
    <StyledHeaderContent>
      <StyledHeaderTitle to="/">{children}</StyledHeaderTitle>
      <StyledHeaderNavbar>
        <StyledHeaderNavLink
          to="/wiki"
          activeClassName="isActive"
          partiallyActive={true}
        >
          Wiki
        </StyledHeaderNavLink>
      </StyledHeaderNavbar>
    </StyledHeaderContent>
  </StyledHeader>
)
