import React from 'react'
import { NextPage } from 'next'

import { Wrap } from './event.style'
import { IProps } from './event.spec'

import TopInfoRow from '../../components/TopInfoRow/TopInfoRow'
import ContentBox from '../../components/ContentBox/ContentBox'
import Location from '../../components/Location/Location'

const EventPage: NextPage<IProps> = () => {
  return (
    <Wrap>
      <TopInfoRow />
      <ContentBox />
      <Location />
    </Wrap>
  )
}

// ViewPage.getInitialProps = async ({ req }: any) => {

//   return req.query.id
// }

export default EventPage