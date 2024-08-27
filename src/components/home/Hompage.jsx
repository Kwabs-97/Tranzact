import React from "react";
import Container from "../Container";
import Navbar from "../Navbar/Navbar";
import Items from "./Items";
import StoreProvider from "@/app/StoreProvider";

function Hompage() {
  return (
    <Container>
      <StoreProvider>
        <Navbar />
        <header>
          <h4>Hi there 👋 Welcome Back to DixstroBags</h4>
        </header>
        <main className="border-t-2 border-gray-400 p-1 rounded-md">
          <Items />
        </main>
      </StoreProvider>
    </Container>
  );
}

export default Hompage;
