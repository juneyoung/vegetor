import styled from 'styled-components'

export const CardWrap = styled.div`
    width: 328px;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
`

export const CardContainer = styled.div`
    padding: 16px;
    box-sizing: border-box;
`

export const CardThumbnail = styled.img`
    width: 100%;
    height: 186px;
`

export const CardDate = styled.time`
    font-size: 12px;
    color: #1bcd78;
`

export const CardTitle = styled.h4`
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.87);
    margin: 8px 0;
    text-align: justify;
`

export const CardPlace = styled.small`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
`
