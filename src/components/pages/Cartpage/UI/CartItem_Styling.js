import styled from "styled-components";

export const StyledCartItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  //border: 2px solid #eae4f6;
  //border-radius: 25px;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    width: 100px;
  }
  img {
    width: 10vh;
    padding: 15px;
  }
  section {
    display: flex;
    flex-direction: row;
    width: 200px;
  }
  input {
    height: fit-content;
    width: 35px;
  }
  button {
    background-color: transparent;
    font-size: 15px;
    border: none;
    padding: 2px;
    text-align: left;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #997cd6;
    }
  }
`;
