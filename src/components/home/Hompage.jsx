import React from "react";

import Container from "../Container";
import Navbar from "../Navbar/Navbar";

function Hompage() {
  return (
    <Container>
      <Navbar />
      <header>
        <h4>Hi there 👋 Welcome Back to DixtroBags</h4>
      </header>
      <main className="max-h-screen max-w-screen-sm"></main>
    </Container>
  );
}

export default Hompage;
