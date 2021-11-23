import React from "react";
import { Link } from "react-router-dom";
import { Container, RightSide, LeftSide } from "./Home_Styling";

function Home() {
  const style = {
    textDecoration: "none",
    width: "20%",
    marginLeft: "25px",
  };
  return (
    <Container>
      <LeftSide>
        <h1>You can find here everything for your garden.</h1>
        <p>
          We offer the highest quality garden tools, chemicals and much more.
        </p>
        <Link style={style} to="/Shop">
          <div>ORDER NOW</div>
        </Link>
      </LeftSide>
      <RightSide />
    </Container>
  );
}

export default Home;
