import React from 'react'

import { Link } from '../atoms/Link'
import {
  StyledHeader,
  StyledHeaderContent,
  StyledHeaderTitle,
} from './Header.styles'

export const Header: React.FC = ({ children }) => (
  <StyledHeader>
    <StyledHeaderContent>
      <StyledHeaderTitle to="/" hideUnderline>{children}</StyledHeaderTitle>
      <nav>
        <Link to="/wiki/" showActive partiallyActive hideUnderline>
          Wiki
        </Link>
      </nav>
    </StyledHeaderContent>
  </StyledHeader>
)
