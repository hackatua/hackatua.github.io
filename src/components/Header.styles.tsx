import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeader = styled.header`
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  border-bottom: 1px dashed #b5e853;
  padding: 20px 0;
  margin: 0 0 40px 0;
`

export const StyledHeaderContent = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
`

export const StyledHeaderTitle = styled(Link)`
  position: relative;
  font-size: 30px;
  font-weight: bold;
  color: #b5e853;
  &:before {
    content: "./";
    position: absolute;
    left: -40px;
  }
`
