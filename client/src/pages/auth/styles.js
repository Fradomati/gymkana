import styled from 'styled-components'

export const ContainerGlobal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const ContainerPreForm = styled.div`
  min-width: 300px;
  min-height: 400px;
  width: 30vw;
  height: 60vh;
  border-radius: 10px;
  border: 2.5px solid #bfc6c7;
  //  transition: border 1s;
  //  &:hover {
  //     border: 1px solid #18697a;
  //  }
`

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 30%;
  width: 100%;
  justify-content: center;
  align-items: center;
`
export const InputAuth = styled.input`
  width: 80%;
  border: none;
  border-bottom: 2px solid #18697a;
  margin: 0.5em 0;
  padding: 0.4em;
  background-color: #f9f1f1;
  transition: border-bottom linear 0.2s;
  &:focus {
    color: #18697a;
    border-bottom: 4px solid #18697a;
  }
`

export const Submit = styled.input`
  cursor: pointer;
  margin: 1em;
  padding: 0.6em 2.6em;
  border-radius: 2em;
  border: none;
  background-color: #ffa62b;
  font-weight: bold;
  border-top: 2px solid #c77700;
  border-bottom: 2px solid #ffd85f;
  border-left: 2px solid #c77700;
  border-right: 2px solid #ffd85f;
  transition-property: border-top, border-bottom, border-left, border-right,
    box-shadow;
  transition-duration: 0.5s;
  transition-timing-function: ease-out;
  box-shadow: -2px -2px 4px 0px #00000052;
  &:hover {
    border-bottom: 2px solid #c77700;
    border-right: 2px solid #c77700;
    border-top: 2px solid #ffd85f;
    border-left: 2px solid #ffd85f;
    box-shadow: 2px 2px 4px 0px #00000052;
  }
`

export const NavAuth = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

export const ModuleAuth = styled.div`
  width: 50%;
  text-align: right;
  padding: 1em 0em;
  color: grey;
  &:hover {
    color: black;
  }
`
export const ErrorTxt = styled.div`
margin: 0.3em 0;
    width: 80%;
    text-align: left;
    color: red;
}
`

export const Title = styled.h2`
  font-size: 1.5em;
  color: #18697a;
  font-weight: bold;
`
export const DivShowPassword = styled.div`
  width: 80%;
  font-size: 0.8em;
  color: grey;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
