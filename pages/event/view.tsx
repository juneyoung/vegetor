// import axios from 'axios'
// import { NextPageContext } from 'next'
import React from 'react'

import HorizontalNarrator from '../../components/HorizontalNarrator'

const EventViewPage = ({ }) => (
    <div>
        <HorizontalNarrator />
    </div>
)

// EventViewPage.getInitialProps = async ({ query }: NextPageContext) => {
//     const { } = await axios.get(`id=${ query.id }`)
//
//     return { id: query.id }
// }

export default EventViewPage
