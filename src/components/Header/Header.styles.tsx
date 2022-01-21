import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledHeader = styled.header`
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  border-bottom: 1px dashed #b5e853;
  padding: 20px 0;
  margin: 0 0 40px 0;
`

export const StyledHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
`

export const StyledHeaderTitle = styled(Link)`
  position: relative;
  font-size: 30px;
  font-weight: bold;
  color: ${p => p.theme.colors.inchworm};
`

export const StyledHeaderNavbar = styled.nav``

export const StyledHeaderNavLink = styled(Link)`
  color: ${p => p.theme.colors.inchworm};
  transition: text-shadow 0.15s ease-out;

  &.isActive {
    text-shadow: 0 0 4px ${p => p.theme.colors.inchworm};
  }

  &:hover {
    text-shadow: 0 0 2px ${p => p.theme.colors.inchworm},
      0 0 4px ${p => p.theme.colors.inchworm};
  }
`
