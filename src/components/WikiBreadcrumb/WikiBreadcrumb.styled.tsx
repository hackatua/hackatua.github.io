import styled from 'styled-components'
import { Link } from '../atoms/Link'

export const StyledWikiBreadcrumb = styled.div`
  color: ${p => p.theme.colors.inchworm};
`

export const StyledWikiBreadcrumbLink = styled(Link)`
  display: inline-block;

  &:first-letter {
    text-transform: uppercase;
  }
`
