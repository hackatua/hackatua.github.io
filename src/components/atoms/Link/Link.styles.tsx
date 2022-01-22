import styled from 'styled-components'
import { Link, LinkProps } from '../../base/Link'

export interface StyledLinkProps extends LinkProps {
  hideUnderline?: boolean
}

export const StyledLink = styled(Link)<StyledLinkProps>`
  color: ${p => p.theme.colors.inchworm};
  text-decoration: ${p => !p.hideUnderline && 'underline'};

  &.active {
    text-shadow: 0 0 4px ${p => p.theme.colors.inchworm};
  }

  transition: text-shadow 0.15s ease-out;

  &:hover {
    text-shadow: 0 0 2px ${p => p.theme.colors.inchworm},
      0 0 4px ${p => p.theme.colors.inchworm};
  }
`
