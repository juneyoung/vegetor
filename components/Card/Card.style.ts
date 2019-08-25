import styled from "styled-components"

export const Wrapper = styled.div`
  width: 350px;
  height: 414px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12),
    0 1px 1px 0 rgba(0, 0, 0, 0.14);
  cursor: pointer;
`

export const Thumbnail = styled.img`
  width: 100%;
  height: 213px;
`

export const Content = styled.div`
  padding: 16px;
  height: ${414 - 213 - 16 * 2}px;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const Date = styled.time`
  color: rgb(135, 135, 135);
  font-size: 14px;
`

export const Title = styled.h3`
  line-height: 1.3;
  font-size: 18px;
`

export const Subscription = styled.p`
  color: rgb(117, 117, 117);
`
