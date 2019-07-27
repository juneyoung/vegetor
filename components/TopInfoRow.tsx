import React from "react"
import styled from "styled-components"

const Wrap = styled.div`
  display: flex;
  width: 100%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12),
    0 1px 1px 0 rgba(0, 0, 0, 0.14);
`

const MainImage = styled.img`
  width: 65%;
`

const MainInfo = styled.div`
  width: 30%;
  padding: 24px;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 1.8rem;
  margin: auto 0;
`

const Contents = styled.ul`
  margin-top: 30%;
  list-style-type: none;
  padding: 0;
  height: 70%;
`

const Content = styled.li`
  line-height: 2;
`

const ContentTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
`

const Desc = styled.div`
  font-size: 16px;
  color: rgb(74, 74, 74);
`

const Date = styled.time`
  font-size: 16px;
  color: rgb(74, 74, 74);
`

const Divider = styled.div`
  width: 100%;
  border: 1px dashed #f2f2f2;
  margin: 24px 0;
`

const Link = styled.a`
  width: 128px;
  height: 24px;
  padding: 12px;
  font-size: 16px;
  color: rgb(74, 74, 74);
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #f2f2f2;
    border-radius: 8px;
  }
`

const LinkIcon = styled.i``

const LinkText = styled.span`
  margin-left: 8px;
`

const TopInfoRow = () => {
  return (
    <Wrap>
      <MainImage src="https://www.jungle.co.kr/image/f83e32bd4b9f8fd6f477e7a3" />
      <MainInfo>
        <Title>마르쉐 @ MMCA</Title>
        <Contents>
          <Content>
            <ContentTitle>장소</ContentTitle>
            <Desc>
              국립 현대 미술관 서울관 마당
            </Desc>
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
