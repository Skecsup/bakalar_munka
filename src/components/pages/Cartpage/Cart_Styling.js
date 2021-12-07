import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div`
  background-color: #997cd6;
  margin: 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  div {
    font-size: 20px;
    font-weight: 500;
    padding: 20px;
  }
`;

export const Pricebar = styled.div`
  justify-content: space-evenly;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  border-top: 2px solid #997cd6;
  text-align: right;
  font-size: 20px;

  div {
    padding-top: 10px;
    padding-left: 20px;
  }
`;
