import React from "react"
import {
  StyledWikiBreadcrumb,
  StyledWikiBreadcrumbActive,
  StyledWikiBreadcrumbLink,
} from "./WikiBreadcrumb.styled"

interface Props {
  slug: string
}

export const WikiBreadcrumb: React.VFC<Props> = ({ slug }) => {
  const breadcrumbs = slug
    .split("/")
    .filter(Boolean)
    .map((subPath, index, subPaths) => {
      const title = subPath
      let path = `/${subPaths.slice(0, index + 1).join("/")}/`

      return { title, path }
    })

  return (
    <StyledWikiBreadcrumb>
      <StyledWikiBreadcrumbLink to="/">~</StyledWikiBreadcrumbLink>
      {breadcrumbs.map(({ title, path }, index) => (
        <React.Fragment key={index}>
          {index < breadcrumbs.length ? " / " : ""}
          {index < breadcrumbs.length - 1 ? (
            <StyledWikiBreadcrumbLink to={path}>
              {title}
            </StyledWikiBreadcrumbLink>
          ) : (
            <StyledWikiBreadcrumbActive>{title}</StyledWikiBreadcrumbActive>
          )}
        </React.Fragment>
      ))}
    </StyledWikiBreadcrumb>
  )
}
