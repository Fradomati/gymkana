import styled from "styled-components"

export const TitlePage = styled.div`
font-size: 1.8em;
padding: 0.3em;
border-radius: 5px;
font-weight: bold;
color: #fff;
background-color: #18697a;
text-align: center;
`

export const ContainerForm = styled.div`
    margin-top: 1em;
        padding: 0.5em;
    border-radius: 5px;
    box-shadow: 0px 0px 3px 0px #888888ad;
    background-color: #e2dede;
`

export const TopText = styled.div`
font-size: 1.1em;
color: #1a697a;
padding: 0.3em 0;
`

export const Input = styled.input`
    width: 100%;
    border: 0px;
    padding: 0.4em 0em 0.4em 0.4em;
    border-radius: 5px;
`
export const Select = styled.select`
    padding: 0.4em 0.4em 0.4em 0.4em;
    border: none;
    border-radius: 5px; 
`

export const SelectContainer = styled.div`
    margin-right: 1em
`

export const UlChallengerList = styled.ul`
display: flex;
justify-content: space-evenly;
`

export const LiChallengerListElement = styled.li`
display: flex;
padding: 0.5em;
width: 15px;
height: 15px;
border: 1px solid #db6400;
border-radius: 100%;
align-items: center;
justify-content: center;
cursor: pointer;
&:hover{
    background-color: #ffa62b
};

`