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
export const DivSectionImg = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
margin-bottom: 1em;
`
export const ImgEmbed = styled.img`
min-width: 20%;
max-width: 30%;
height: auto;
`
export const DivSectionVideo = styled.div`
display: flex;
width: 100%;
margin-bottom: 1em;
padding: 0.5em 0.3em;
background-color: #f9f9f9;
box-shadow: 0px 0px 3px 0px #888888ad;
border-radius: 5px;
`
export const DivStructureVideo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 0.9em;
margin: 1em;
color: #30899b;
cursor: default;
width: 4em;
height: 4em;
`
export const VideoIcon = styled.img`
width: 2.5em;
height: auto;
margin-bottom: 0.3em;
cursor: pointer;
&:hover {
    width: 2.7em
}
`


export const DivSectionInfo = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`

export const DivInfo = styled.div`
width: 1em;
height: 1em;
border-radius: 100%;
text-align: center;
background-color: #f5a332;
padding: 0.3em;
box-shadow: 0px 0px 2px #000000c2;
cursor: pointer;
`
export const ClueHide = styled.li`
width: 5em;
padding: 0.3em;
margin: 0.5em 0;
border-radius: 5px;
background-color: #ffa62b;
box-shadow: 0px 0px 2px #000000c2;
cursor: pointer;
&:hover {
    box-shadow: 0px 0px 4px #000000c2;
   
}
`
export const ClueShow = styled.li`
padding: 0.3em 0.3em;
background-color: #f9f9f9;
box-shadow: 0px 0px 3px 0px #888888ad;
border-radius: 5px;
margin-bottom: 0.5em;
`
export const FormAnswer = styled.form`
display: flex;
flex-direction: column;
margin-top: 2em;
`

export const MainContent = styled.div`
padding-bottom: 10em;
`