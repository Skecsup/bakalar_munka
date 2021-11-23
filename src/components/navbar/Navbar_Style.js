import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #eae4f6;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  filter: drop-shadow(0 0 5px #aaa);
  transition: border-bottom-left-radius 0.4s ease-in-out;
  @media (max-width: 768px) {
    border-bottom-left-radius: 25px;
  }
`;
export const Logo = styled.div`
  margin: 5px 5px;
  padding: 5px;
  cursor: pointer;
  img {
    height: 80px;
  }
`;

export const Menu = styled.div`
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
  position: relative;
  text-align: center;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${(props) => (props.isOpen ? "300px" : "0")};
    transition: max-height 0.4s ease-in-out;
  }
`;
export const MenuLink = styled.div`
  padding: 10px 10px;
  color: #997cd6;
  cursor: pointer;
  font-size: 25px;
  font-weight: 100;
  transition: color 0.4s ease-in-out;
  &:hover {
    color: #56417f;
  }
`;
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  padding: 10px;
  cursor: pointer;

  span {
    height: 4px;
    width: 25px;
    margin-bottom: 4px;
    border-radius: 2px;
    background: #997cd6;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Signin = styled.div`
  margin-left: 30px;
  padding: 10px 20px;
  background-color: #997cd6;
  border-radius: 25px;
  color: white;
  font-weight: 100;
  cursor: pointer;
  font-size: 25px;
  transition: background-color 0.4s ease-in-out;
  &:hover {
    background-color: #56417f;
  }
  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`;
