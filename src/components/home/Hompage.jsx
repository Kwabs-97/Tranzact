import React from "react";
import UserForm from "../forms/UserForm";

function Hompage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col ">
      <h4>Hi there 👋 Welcome to Tranz@</h4>
      <UserForm />
    </div>
  );
}

export default Hompage;
