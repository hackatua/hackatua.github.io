import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

export interface LinkProps {
  to: string
  className?: string
  partiallyActive?: boolean
  showActive?: boolean
}

export const Link: React.FC<LinkProps> = ({
  children,
  to,
  className,
  partiallyActive,
  showActive,
}) => (
  <GatsbyLink
    to={to}
    className={className}
    activeClassName={showActive ? 'active' : ''}
    partiallyActive={partiallyActive}
  >
    {children}
  </GatsbyLink>
)
