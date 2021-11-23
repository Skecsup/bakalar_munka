import styled from "styled-components";
import kep1 from "../../../assets/img/base.jpg";
import kep2 from "../../../assets/img/hover.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 104px);
`;
export const RightSide = styled.div`
  width: 50%;
  height: calc(100vh - 104px);
  background-image: url(${kep1});
  background-size: 100% 100%;
  transition: background-image 1.5s ease-in-out;
  &:hover {
    background-image: url(${kep2});
  }
`;

export const LeftSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    padding: 25px;
    font-size: 7vh;
    color: #997cd6;
  }
  p {
    padding: 25px;
    font-size: 2vh;
    color: #56417f;
  }
  div {
    font-weight: 500;
    text-align: center;
    font-size: 3vh;
    padding: 15px;
    width: 20%;
    margin: 25px;
    border: 3px solid #997cd6;
    color: #997cd6;
    transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;

    &:hover {
      background-color: #997cd6;
      color: white;
    }
  }
`;
