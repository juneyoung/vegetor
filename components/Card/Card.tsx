import React from 'react'

import { IProps } from './Card.spec'
import { CardContainer, CardDate, CardPlace, CardThumbnail, CardTitle, CardWrap } from './Card.style'

const Card = ({ imageUrl, date, title, place }: IProps) => (
    <CardWrap>
        <CardThumbnail src={ imageUrl } />
        <CardContainer>
            <CardDate>{ date }</CardDate>
            <CardTitle>{ title }</CardTitle>
            <CardPlace>{ place }</CardPlace>
        </CardContainer>
    </CardWrap>
)

export default Card
