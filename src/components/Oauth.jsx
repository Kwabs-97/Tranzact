"use client";
import React from "react";
import CustomButtom from "./CustomButtom";
import appleIcon from "../../public/assets/icons/apple.svg";
import googleIcon from "../../public/assets/icons/google.svg";
import Image from "next/image";

function Oauth() {
  return (
    <div className="flex flex-col gap-3">
      <CustomButtom className="flex items-center flex-row gap-8 ">
        <Image alt="apple-svg" src={googleIcon} />
        Contiue with Google
      </CustomButtom>
      <CustomButtom className="flex items-center flex-row gap-8">
        <Image alt="apple-svg" src={appleIcon} />
        Contiue with Apple
      </CustomButtom>
    </div>
  );
}

export default Oauth;
