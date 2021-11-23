import React, { useState } from "react";
import logo from "../../../assets/img/vizjel.png";
import { Card, SignUp, SignIn } from "./Signin_Styling";

function Signin() {
  const [state, setstate] = useState(true);

  let signin = (
    <Card>
      <img src={logo} alt="logo" />
      <h1>Sign In</h1>
      <h3>Username</h3>
      <input type="text" />
      <h3>Password</h3>
      <input type="password" />
      <SignIn>Sign In</SignIn>
      <p>New on Wisteria?</p>
      <SignUp onClick={() => setstate(!state)}>
        Create yout Wisteria Account
      </SignUp>
    </Card>
  );

  let signup = (
    <Card>
      <img src={logo} alt="logo" />
      <h1>Sign Up</h1>
      <h3>E-mail</h3>
      <input type="email" />
      <h3>Username</h3>
      <input type="text" />
      <h3>Password</h3>
      <input type="password" />
      <h3>Re-enter password</h3>
      <input type="password" />
      <SignIn onClick={() => setstate(!state)}>Sign Up</SignIn>
    </Card>
  );

  const style = {
    height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return <div style={style}>{state ? signin : signup}</div>;
}

export default Signin;
