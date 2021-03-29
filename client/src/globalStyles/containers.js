import styled from "styled-components"
import { device } from "./devices"

/** Flex Container **/

export const RightFlexContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`
export const LeftFlexContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`
export const CenterFlexContainer = styled.div`
    display: flex;
    justify-content: center;
`
export const CenterMiddleCointaner = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FlexBtwContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
// SPACES

export const SpaceOne = styled.div`
margin: 1em 0
`
// MARGIN CONTAINERS 

export const Margin2emTB = styled.div`
margin: 2em 0
`
// SIZE CONTAINER

export const Div70width = styled.div`
@media ${device.tablet} {
    max-width: 70%;
    margin: 0 auto;
}
`