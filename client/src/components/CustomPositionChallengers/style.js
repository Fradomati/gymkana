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
box-shadow: 0px 0px 5px 0px black;
flex-direction: column;
`

export const ULContainer = styled.ul`
margin-top: 0.5em;
min-width: 70%;
min-height: 70%;
overflow: autor;
`

export const LiContainer = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #c3c2c2;

`

export const ButtonClose = styled.button`
border-radius: 100%;
    border: none;
    width: 25px;
    height: 25px;
    background-color: #ffa62b;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 4px 1px #888787;
    
    }
`
export const CustomPositionButtons = styled.div`
display: flex;
justify-content: space-between;
width: 40px;
margin: 0.5em 0;
`
export const UpOption = styled.div`
cursor: pointer;

`