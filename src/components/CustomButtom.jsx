import React from "react";
import { Button } from "./ui/button";

function CustomButtom({ children, className, disabled }) {
  return (
    <Button
      className={`${className} border border-gray-300`}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

export default CustomButtom;
