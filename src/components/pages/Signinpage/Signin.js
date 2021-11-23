import React from "react";
import { Card } from "./Signin_Styling";

function Signin() {
  const style = {
    height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={style}>
      <Card>
        <h1>Sign In</h1>
        <h3>Username</h3>
        <input type="text" />
        <h3>Password</h3>
        <input type="password" />
      </Card>
    </div>
  );
}

export default Signin;
