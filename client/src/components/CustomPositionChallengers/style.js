import styled from "styled-components"

export const ParentContainer = styled.div`
width: 100vh;
    height: 50vh;
    z-index: 999999;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ChildContainer = styled.div`
display: flex;
width: 50vw;
height: 50vh;
justify-content: center;
align-items: center;
background-color: #ffffff;
border-radius: 5%;
box-shadow: 0px 0px 12px 0px black;
`