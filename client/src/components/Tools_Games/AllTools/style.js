import styled from "styled-components";

export const ParentDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  margin: 1em 0;
`;

export const ChildDiv = styled.div`
  width: 65%;
  padding: 1.5em;
  background-color: #ffffff;
    box-shadow: 0px 0px 3px 0px #888888ad;
    border-radius: 5px;
`;


/** Styles of Tools **/

export const TitleDiv = styled.div`
text-align: center;
margin: 1em 0;
font-size: 2em;
color: #db6400;
font-weight: bold;
`

export const UlStatic = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
`;

export const LiStatic_A = styled.li`
  background-color: #16697a;
  color: white;
  min-width: calc(100% / 54);
  padding: 0.3em;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #080808;
  margin: 0.1em;  
  padding: 0.3em;
  cursor: default;
`;

export const LiStatic_B = styled.li`
  min-width: calc(100% / 54);
  text-align: center;
  background-color: #d39a3f;
  color: white;
  padding: 0.3em;
  border-radius: 5px;
  border: 1px solid #080808;
  margin: 0.1em;
  padding: 0.3em;
  cursor: default;
`;

export const LiDynamic_A = styled.li`
  background-color: white;
  color: #16697a;
  font-weight: bold;
  border: 1px solid #16697a;
  min-width: calc(100% / 54);
  padding: 0.3em;
  text-align: center;
  border-radius: 5px;
  margin: 0.1em;  
  padding: 0.3em;
  cursor: default;
`;

export const LiDynamic_B = styled.li`
  min-width: calc(100% / 54);
  text-align: center;
  background-color: white;
  font-weight: bold;
  color: d39a3f;
  padding: 0.3em;
  border-radius: 5px;
  border: 1px solid #d39a3f;
  margin: 0.1em;
  padding: 0.3em;
  cursor: default;
`;

export const UlDinamic = styled.ul`
  display: flex;
  list-style-type: none;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding-bottom: 5px;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    height: 10px;
    background-color: #e2e2e2;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #3f8796;
    box-shadow: 0 0 1px rgb(255 255 255 / 50%);
    &:hover {
      background-color: #16697a;
    }
  }
`;

/** GRID **/

export const UlGrid = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`;

export const LiGrid = styled.li`
  max-width: calc(100% / 27);
  padding: 0.3em;
  text-align: center;
  border: 1px solid black;
  margin: 0.04em;
`;

export const InputGrid = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: white;
  text-align: center;
  padding: 0px;

  &:focus {
    outline: none;
  }
`;

/** Style Couples Letter **/

export const Table = styled.ul`
  width: 500px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const Cards = styled.li`
  width: 20%;
  height: 20%;
  text-align: center;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 1px;
  border-radius: 100%;
`;
