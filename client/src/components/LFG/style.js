import styled from "styled-components"

// Container "Li" of games found

export const ContainerGames = styled.div`
margin-top: 0.4em;
width: 100%;
max-height: 20vh;
overflow: scroll;
background-color: #ececec;
`

export const LiGamesDark = styled.li`
padding: 0.3em 0.4em 0.3em 0.4em;
background-color: #dedede;
cursor: pointer;
&:hover {
    border: 1.5px solid #737270;
    border-radius: 5px;
}
`

export const LiGames = styled.li`
padding: 0.3em 0.4em 0.3em 0.4em;
cursor: pointer;
&:hover {
    border: 1.5px solid #737270;
    border-radius: 5px;
}
`

export const Hr = styled.hr`
color: #18697a;
border-bottom: 2px solid;
`

