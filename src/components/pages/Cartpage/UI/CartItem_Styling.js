import styled from "styled-components";

export const StyledCartItem = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px;

  //border: 2px solid #eae4f6;
  border-radius: 25px;
  width: 50vh;
  div {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 10vh;
  }
`;
