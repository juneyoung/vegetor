import { useRouter } from 'next/router'
import React from 'react'

import Button from '../../components/Button'
import Card from '../../components/Card'

import { ButtonWrap, CardListWrap, IndexPageWrap, MainSectionContainer, MainSectionTitle, MainSectionWrap } from './index.style.ts'

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

const MainSection = () => {
    const router = useRouter()

    return (
        <MainSectionWrap>
            <MainSectionContainer>
                <MainSectionTitle>비건들을 위한 행사 <br /> 지금 시작해보세요.</MainSectionTitle>
                <ButtonWrap>
                    <Button label='이벤트 주최하기' onClick={ () => router.push('/event/form') } />
                </ButtonWrap>
            </MainSectionContainer>
        </MainSectionWrap>
    )
}

const IndexPage = () => {
    return (
        <IndexPageWrap>
            <MainSection />
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
