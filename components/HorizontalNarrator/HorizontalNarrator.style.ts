import styled from 'styled-components'

export const HorizontalNarratorWrap = styled.div`
    overflow-x: scroll;
    display: flex;
    &::-webkit-scrollbar {
        display: none;
    }
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
`

export const HorizontalNarratorContainer = styled.div`
    width: 150px;
    height: 200px;
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 5px -1px rgba(0, 0, 0, 0.12), 0 1px 10px 0 rgba(0, 0, 0, 0.14);
    background-color: #ffffff;
    margin-right: 16px;
    &:last-child {
        margin-right: 0;
    }
    flex: 0 0 auto;
`
