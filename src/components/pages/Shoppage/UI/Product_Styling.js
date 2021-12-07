import styled from "styled-components";

export const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 30px;

  background-color: #eae4f6;
  border-radius: 25px;
  filter: drop-shadow(0 0 0.75rem #997cd6);
  width: max-content;
  height: max-content;

  img {
    width: 30vh;
    height: 30vh;
  }
  h1 {
    font-size: 30px;
  }
  p {
    width: 30vh;
    text-align: justify;
  }
  strong {
    margin-top: 10px;
    text-align: center;
    font-size: 20px;
  }
  button {
    border-radius: 10px;
    margin: 10px;
    background-color: white;
    border: 1px solid #997cd6;
    transition: filter 0.3s ease-in-out;
    &:hover {
      filter: drop-shadow(0 0 0.3rem #997cd6);
    }
  }
`;
