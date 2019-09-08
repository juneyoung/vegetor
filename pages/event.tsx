import React from 'react'
import styled from 'styled-components'

import ContentBox from '../components/ContentBox/ContentBox'
import Location from '../components/Location/Location'
import TopInfoRow from '../components/TopInfoRow/TopInfoRow'

import { NextPage } from 'next'

const Wrap = styled.div`
  height: 100%;
`

const EventPage: NextPage = () => {
  return (
    <Wrap>
      <TopInfoRow />
      <ContentBox />
      <Location />
    </Wrap>
  )
}

export default EventPage
