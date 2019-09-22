// import axios from 'axios'
// import { NextPageContext } from 'next'
import React from 'react'

import HorizontalNarrator from '../../components/HorizontalNarrator'
import ImageSlider from '../../components/ImageSlider'

const EventViewPage = ({ }) => (
    <div>
        <ImageSlider />
        <HorizontalNarrator />
    </div>
)

// EventViewPage.getInitialProps = async ({ query }: NextPageContext) => {
//     const { } = await axios.get(`id=${ query.id }`)
//
//     return { id: query.id }
// }

export default EventViewPage
