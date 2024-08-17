import React from "react";
import Login from "../Login";
import Container from "../Container";
import Navbar from "../Navbar/Navbar";

function Hompage() {
  return (
    <Container>
      <Navbar />
      <h4>Hi there 👋 Welcome Back to Tranz@</h4>
      <p>Log in to continue</p>
    </Container>
  );
}

export default Hompage;
