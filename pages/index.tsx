import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Button from '../components/Button'
import Card from '../components/Card'

const IndexPageWrap = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const MainSectionWrap = styled.div`
    width: 100%;
    height: 360px;
    background-image: url("static/main-sample.jpg");
    background-size: 100% auto;
    display: flex;
    justify-content: center;
`

const MainSectionContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 16px;
    position: relative;
`

const MainSectionTitle = styled.h2`
    font-family: BMJUAOTF;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    font-size: 30px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.27;
    letter-spacing: normal;
    color: #ffffff;
    white-space: nowrap;
    padding-top: 142px;
`

const CardListWrap = styled.div`
    margin-top: 20px;
    div {
        margin-bottom: 22px;
    }
`

const ButtonWrap = styled.div`
    width: 100%;
    height: 48px;
    position: absolute;
    bottom: 16px;
    left: 0;
`

const datas = [
    {
        id: 1,
        imageUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        date: '2019년 12월 12일',
        title: '비건을 위한 단호박케익 행사를 엽니다. 제목을 뭘로 지어야할지 모르겠…',
        place: '마로니에 공원'
    },
    {
        id: 2,
        imageUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        date: '2019년 12월 12일',
        title: '비건을 위한 단호박케익 행사를 엽니다. 제목을 뭘로 지어야할지 모르겠…',
        place: '마로니에 공원'
    },
    {
        id: 3,
        imageUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        date: '2019년 12월 12일',
        title: '비건을 위한 단호박케익 행사를 엽니다. 제목을 뭘로 지어야할지 모르겠…',
        place: '마로니에 공원'
    }
]

const IndexPage: NextPage = () => {
    const router = useRouter()

    return (
        <IndexPageWrap>
            <MainSectionWrap>
                <MainSectionContainer>
                    <MainSectionTitle>비건들을 위한 행사 <br /> 지금 시작해보세요.</MainSectionTitle>
                    <ButtonWrap>
                        <Button label='이벤트 주최하기' onClick={ () => router.push('/event/form') } />
                    </ButtonWrap>
                </MainSectionContainer>
            </MainSectionWrap>
            <CardListWrap>
                {
                    datas.map(({ id, imageUrl, date, title, place }) => (
                        <Card
                            key={ id }
                            id={ id }
                            imageUrl={ imageUrl }
                            date={ date }
                            title={ title }
                            place={ place }
                            url={ `/event/${ id }` }
                        />
                    ))
                }
            </CardListWrap>
        </IndexPageWrap>
    )
}

export default IndexPage
