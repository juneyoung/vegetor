import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface IProps {
    id: number;
    imageUrl: string;
    date: string;
    title: string;
    place: string;
    url: string;
}

const Container = styled.div`
    width: 328px;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
`

const Content = styled.div`
    padding: 16px;
    box-sizing: border-box;
`

const Image = styled.img`
    width: 100%;
    height: 186px;
`

const Date = styled.time`
    font-size: 12px;
    color: #1bcd78;
`

const Title = styled.h4`
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.87);
    margin: 8px 0;
    text-align: justify;
`

const Place = styled.small`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
`

const Card: FunctionComponent<IProps> = ({ imageUrl, date, title, place, url }) => {
    const router = useRouter()

    return (
        <Container onClick={ () => router.push( url ) }>
            <Image src={ imageUrl } />
            <Content>
                <Date>{ date }</Date>
                <Title>{ title }</Title>
                <Place>{ place }</Place>
            </Content>
        </Container>
    )
}

export default Card
