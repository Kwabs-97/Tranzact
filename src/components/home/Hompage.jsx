import React from "react";
import Login from "../Login";
import Container from "../Container";

function Hompage() {
  return (
    <Container>
      <h4>Hi there 👋 Welcome Back to Tranz@</h4>
      <p>Log in to continue</p>
      <Login />
    </Container>
  );
}

export default Hompage;
