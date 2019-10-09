import styled from 'styled-components'

export const IndexPageWrap = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MainSectionWrap = styled.div`
    width: 100%;
    height: 360px;
    background-image: url("static/main-sample.jpg");
    background-size: 100% auto;
    display: flex;
    justify-content: center;
`

export const MainSectionContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 16px;
    position: relative;
`

export const MainSectionTitle = styled.h2`
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

export const CardListWrap = styled.div`
    margin-top: 20px;
    div {
        margin-bottom: 22px;
    }
`

export const ButtonWrap = styled.div`
    width: 100%;
    height: 48px;
    position: absolute;
    bottom: 16px;
    left: 0;
`
