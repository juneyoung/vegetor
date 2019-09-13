import React from 'react'
// import Card from '../components/Card'
// import Button from '../components/Button'
import { InputText } from '../components/Input'

const IndexPage = () => (
  <div>
    {/* <Card
    imageUrl='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
    date='2019년 12월 12일'
    title='비건을 위한 단호박케익 행사를 엽니다. 제목을 뭘로 지어야할지 모르겠…'
    place='마로니에 공원' /> */}

    {/* <Button label='이벤트 주최하기' onClick={ (e) => e } /> */}

    <InputText onChange={ (e) => e } />
  </div>
)

export default IndexPage
