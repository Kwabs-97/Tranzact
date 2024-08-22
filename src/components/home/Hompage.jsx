import React from "react";
import Container from "../Container";
import Navbar from "../Navbar/Navbar";
import Items from "./Items";

function Hompage() {
  return (
    <Container>
      <Navbar />
      <header>
        <h4>Hi there 👋 Welcome Back to DixstroBags</h4>
      </header>
      <main className="max-h-screen max-w-screen-sm ">
        <div className="border">
          <Items />
        </div>
      </main>
    </Container>
  );
}

export default Hompage;
