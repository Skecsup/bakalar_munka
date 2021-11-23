import styled from "styled-components";

export const Card = styled.div`
  width: auto;
  display: flex;

  align-items: center;
  flex-direction: column;
  background-color: #eae4f6;
  border-radius: 25px;
  filter: drop-shadow(0 0 0.75rem #997cd6);

  img {
    width: 25%;
    margin-top: -40px;
  }

  h1 {
    color: #997cd6;
    font-size: 50px;
    margin-bottom: 50px;
  }
  h3 {
    color: #56417f;
    font-weight: 400;
  }
  input {
    margin-bottom: 10px;
    border-radius: 8px;
  }
  p {
    margin-bottom: 10px;
    color: #56417f;
  }
`;

export const SignUp = styled.button`
  color: #56417f;
  border: 1px solid #56417f;
  background-color: white;
  font-size: 20px;
  padding: 8px 12px;
  border-radius: 25px;
  margin-bottom: 20px;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
  &:hover {
    background-color: #997cd6;
    color: white;
  }
`;

export const SignIn = styled.button`
  font-size: 20px;
  color: white;
  padding: 8px;
  border-radius: 25px;
  width: 43%;
  border: 1px solid #56417f;
  background-color: #997cd6;
  margin-bottom: 10px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #56417f;
  }
`;
