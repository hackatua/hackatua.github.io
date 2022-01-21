import React from 'react'
import { PageProps } from 'gatsby'

const Page404: React.VFC<PageProps> = ({ location }) => (
  <p>404: no such file or directory: {location.pathname}</p>
)

export default Page404
