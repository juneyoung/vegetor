import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12),
    0 1px 1px 0 rgba(0, 0, 0, 0.14);
`

export const MainImage = styled.img`
  width: 65%;
`

export const MainInfo = styled.div`
  width: 30%;
  padding: 24px;
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.8rem;
  margin: auto 0;
`

export const Contents = styled.ul`
  margin-top: 30%;
  list-style-type: none;
  padding: 0;
  height: 70%;
`

export const Content = styled.li`
  line-height: 2;
`

export const ContentTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
`

export const Desc = styled.div`
  font-size: 16px;
  color: rgb(74, 74, 74);
`

export const Date = styled.time`
  font-size: 16px;
  color: rgb(74, 74, 74);
`

export const Divider = styled.div`
  width: 100%;
  border: 1px dashed #f2f2f2;
  margin: 24px 0;
`

export const Link = styled.a`
  width: 128px;
  height: 24px;
  padding: 12px;
  font-size: 16px;
  color: rgb(74, 74, 74);
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #f2f2f2;
    border-radius: 8px;
  }
`

export const LinkIcon = styled.i``

export const LinkText = styled.span`
  margin-left: 8px;
`
