import React from 'react'

import { IProps } from './Card.spec'
import { CardContainer, CardDate, CardPlace, CardThumbnail, CardTitle } from './Card.style'

const Card = ({ imageUrl, date, title, place }: IProps) => (
  <CardContainer>
    <CardThumbnail src={ imageUrl } />
    <CardDate>{ date }</CardDate>
    <CardTitle>{ title }</CardTitle>
    <CardPlace>{ place }</CardPlace>
  </CardContainer>
)

export default Card
