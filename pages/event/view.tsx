import React from 'react'
import { NextPage } from 'next'
import styled from 'styled-components';

import HorizontalNarrator from '../../components/HorizontalNarrator'
import ImageSlider from '../../components/ImageSlider'

const EventViewWrap = styled.div``

const EventViewPage: NextPage = () => {
    return (
        <EventViewWrap>
            <ImageSlider />
            <HorizontalNarrator />
        </EventViewWrap>
    )
}

export default EventViewPage
