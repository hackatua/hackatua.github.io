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
  display: inline-block;
  text-decoration: underline;
  &:first-letter {
    text-transform: uppercase;
  }
  transition: text-shadow 0.15s ease-out;

  &:hover {
    text-shadow: 0 0 2px ${p => p.theme.colors.inchworm},
      0 0 4px ${p => p.theme.colors.inchworm};
  }
`

export const StyledWikiBreadcrumbActive = styled.span`
  display: inline-block;
  text-shadow: 0 0 4px ${p => p.theme.colors.inchworm};
  &:first-letter {
    text-transform: uppercase;
  }
`
