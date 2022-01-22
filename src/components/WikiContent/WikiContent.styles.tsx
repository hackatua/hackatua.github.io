import styled from 'styled-components'

import bullet from '../../images/bullet.png'

export const StyledWikiContent = styled.div`
  padding: 20px;
  margin-top: 10px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px dashed ${p => p.theme.colors.inchworm}70;
  border-radius: 15px;
`

export const StyledWikiContentTitle = styled.h2`
  margin-bottom: 10px;
  color: ${p => p.theme.colors.inchworm};
  font-size: 24px;
`

export const StyledWikiContentBlock = styled.ul`
  list-style-type: disc;
  padding-inline-start: 40px;

  & & {
    padding-inline-start: 20px;
  }
`

export const StyledWikiContentItem = styled.li`
  margin: 10px 0;
  font-size: 18px;
  line-height: 30px;
  list-style-image: url(${bullet});
`
