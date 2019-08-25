import React from 'react'
import { IProps } from './Card.spec'
import { Wrapper, Thumbnail, Content, Date, Title, Subscription } from './Card.style'

const Card = ({ date, title, subscription }: IProps) => {
  return (
    <Wrapper>
      <Thumbnail src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />
      <Content>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Subscription>{subscription}</Subscription>
      </Content>
    </Wrapper>
  )
}

export default Card
