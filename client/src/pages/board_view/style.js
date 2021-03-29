import styled from "styled-components"


export const UlProgressBar = styled.ul`
display: flex;
justify-content: space-evenly;
margin: 1em 0;
`
export const LiProgressCirclesDone = styled.li`
display: flex;
padding: 0.5em;
width: 8px;
height: 8px;
background-color: #0ab947;
border-radius: 100%;
align-items: center;
justify-content: center;
cursor: pointer;
&:hover{
    box-shadow: inset 0px 0px 4px black;
`
export const LiProgressCirclesCurrent = styled.li`
display: flex;
padding: 0.5em;
width: 8px;
height: 8px;
background-color: #c7c7c7;
border: 2px solid #16697a;
border-radius: 100%;
align-items: center;
justify-content: center;
cursor: pointer;
&:hover{
    box-shadow: inset 0px 0px 4px black;
`
export const LiProgressCirclesToDo = styled.li`
display: flex;
padding: 0.5em;
width: 8px;
height: 8px;
background-color: #c7c7c7;
border-radius: 100%;
align-items: center;
justify-content: center;
`
export const DivChallenger = styled.div`
margin: 1em 0;
`
export const CurrentNumber = styled.div`
font-size: 6em;
color: #16697a4f;
text-align: center;
`
export const Title = styled.div`
font-size: 4em;
    color: #16697a8c;
    text-align: center;
    margin: 0.5em 0;
`
export const PreDivSection = styled.div`
font-size: 0.9em;
color: #db6400;
margin-bottom: 0.3em;
`
export const DivSection = styled.div`
padding: 0.5em 0.3em;
background-color: #f9f9f9;
box-shadow: 0px 0px 3px 0px #888888ad;
border-radius: 5px; 
margin-bottom: 1em;
`