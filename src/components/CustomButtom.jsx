import React from "react";
import { Button } from "./ui/button";

function CustomButtom({ children, className }) {
  return (
    <Button className={`${className} border border-gray-300`}>
      {children}
    </Button>
  );
}

export default CustomButtom;
