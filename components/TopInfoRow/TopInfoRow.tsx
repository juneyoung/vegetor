import React from "react"
import {
  Wrap,
  MainImage,
  MainInfo,
  Title,
  Contents,
  Content,
  ContentTitle,
  Desc,
  Divider,
  Date,
  Link,
  LinkIcon,
  LinkText
} from "./TopInfoRow.style"

const TopInfoRow = () => {
  return (
    <Wrap>
      <MainImage src="https://www.jungle.co.kr/image/f83e32bd4b9f8fd6f477e7a3" />
      <MainInfo>
        <Title>마르쉐 @ MMCA</Title>
        <Contents>
          <Content>
            <ContentTitle>장소</ContentTitle>
            <Desc>국립 현대 미술관 서울관 마당</Desc>
          </Content>

          <Divider />

          <Content>
            <ContentTitle>일시</ContentTitle>
            <Date>
              2019년 08월 24일 (토) 오전 10:00 - 08월 25일 (일) 오후 07:00
            </Date>
          </Content>

          <Divider />

          <Content>
            <ContentTitle>주최</ContentTitle>
            <Link href="">
              <LinkIcon className="fas fa-link" />
              <LinkText>마르쉐 친구들</LinkText>
            </Link>
          </Content>
        </Contents>
      </MainInfo>
    </Wrap>
  )
}

export default TopInfoRow
