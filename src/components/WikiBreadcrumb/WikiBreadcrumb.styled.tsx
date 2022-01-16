import { Link } from "gatsby"
import styled from "styled-components"

export const StyledWikiBreadcrumb = styled.div`
  color: ${p => p.theme.colors.inchworm};
`

interface StyledWikiBreadcrumbLinkProps {
  isActive?: boolean
}

export const StyledWikiBreadcrumbLink = styled(
  Link
)<StyledWikiBreadcrumbLinkProps>`
  text-decoration: underline;

  &:hover {
    text-shadow: 0 0 4px ${p => p.theme.colors.inchworm},
      0 0 6px ${p => p.theme.colors.inchworm},
      0 0 8px ${p => p.theme.colors.inchworm};
  }
`

export const StyledWikiBreadcrumbActive = styled.span`
  text-shadow: 0 0 4px ${p => p.theme.colors.inchworm};
`
