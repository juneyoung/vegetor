// import axios from 'axios'
// import { NextPageContext } from 'next'
import React from 'react'

import HorizontalNarrator from '../../components/HorizontalNarrator'
import ImageSlider from '../../components/ImageSlider'

import { EventViewWrap } from './view.style'

const EventViewPage = () => {
    return (
        <EventViewWrap>
            <ImageSlider />
            <HorizontalNarrator />
        </EventViewWrap>
    )
}

// EventViewPage.getInitialProps = async ({ query }: NextPageContext) => {
//     const { } = await axios.get(`id=${ query.id }`)
//
//     return { id: query.id }
// }

export default EventViewPage
