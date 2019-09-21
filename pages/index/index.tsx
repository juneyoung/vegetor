import React from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'

import { ButtonWrap, CardListWrap, IndexPageWrap, MainSectionContainer, MainSectionTitle, MainSectionWrap } from './index.style.ts'

const MainSection = () => (
    <MainSectionWrap>
        <MainSectionContainer>
            <MainSectionTitle>비건들을 위한 행사 <br /> 지금 시작해보세요.</MainSectionTitle>
            <ButtonWrap>
                <Button label='이벤트 주최하기' onClick={ (e) => e } />
            </ButtonWrap>
        </MainSectionContainer>
    </MainSectionWrap>
)

const IndexPage = () => (
    <IndexPageWrap>
        <MainSection />
        <CardListWrap>
            <Card
                imageUrl='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                date='2019년 12월 12일'
                title='비건을 위한 단호박케익 행사를 엽니다. 제목을 뭘로 지어야할지 모르겠…'
                place='마로니에 공원' />
            <Card
                imageUrl='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                date='2019년 12월 12일'
                title='비건을 위한 단호박케익 행사를 엽니다. 제목을 뭘로 지어야할지 모르겠…'
                place='마로니에 공원' />
            <Card
                imageUrl='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                date='2019년 12월 12일'
                title='비건을 위한 단호박케익 행사를 엽니다. 제목을 뭘로 지어야할지 모르겠…'
                place='마로니에 공원' />
        </CardListWrap>
  </IndexPageWrap>
)

export default IndexPage
