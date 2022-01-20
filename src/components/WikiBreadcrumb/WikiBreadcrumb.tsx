import React from "react"
import {
  StyledWikiBreadcrumb,
  StyledWikiBreadcrumbActive,
  StyledWikiBreadcrumbLink,
} from "./WikiBreadcrumb.styled"

export type SlugToTitleDictionary = { [key: string]: string }

interface Props {
  slug: string
  slugToTitleDictionary?: SlugToTitleDictionary
}

export const WikiBreadcrumb: React.VFC<Props> = ({
  slug,
  slugToTitleDictionary,
}) => {
  const breadcrumbs = slug
    .split("/")
    .filter(Boolean)
    .map((subPath, index, subPaths) => {
      let path = `/${subPaths.slice(0, index + 1).join("/")}/`
      const title = getTitle(path, subPath, slugToTitleDictionary)

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

function getTitle(
  path: string,
  subPath: string,
  slugToTitleDictionary?: SlugToTitleDictionary
): string {
  return (slugToTitleDictionary && slugToTitleDictionary[path]) || subPath
}
