import styled from 'styled-components'
import { device } from '../breakpoints'

export const MainNavContainer = styled.div`
  width: 100vw;
  height: 2.5em;
  border-bottom: 1px solid #16697a;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #16697a;
  @media ${device.lt} {
    justify-content: center;
    align-items: flex-start;
    border-bottom: none;
  }
`

export const ULBar = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  list-style-type: none;
  margin-right: 1.5em;
  @media ${device.lt} {
    flex-direction: column;
    width: 100%;
    background-color: #16697a;
    border-radius: 0px 0px 10px 10px;
    z-index: 99999;
    box-shadow: -1px 4px 5px 0px #7b7979;
  }
`

export const Li = styled.li`
  color: white;
  min-height: 25px;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: #ffa62b;
    font-size: 1.1em;
  }
  @media ${device.lt} {
    color: white;
    padding: 0.5em 0px;
    border-top: 1px solid #ffa62b;
  }
`
export const BtnMobile = styled.button`
  background: none;
  border: none;
  font-size: 1.2em;
  transform: rotate(90deg);
  padding: 0.5em;
  font-weight: bold;
  color: white;
`
