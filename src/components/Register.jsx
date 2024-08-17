"use client";
import React from "react";
import axios from "axios";
import FormContainer from "./forms/FormContainer";
import FormInput from "./forms/FormInput";
import { useForm } from "react-hook-form";
import emailIcon from "../../public/assets/icons/email.svg";
import lockIcon from "../../public/assets/icons/lock.svg";
import userIcon from "../../public/assets/icons/user.svg";
import CustomButtom from "./CustomButtom";
import { Separator } from "@radix-ui/react-separator";
import Oauth from "./Oauth";

function Register() {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("api/users/register", data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full px-10 ">
      <FormContainer onSubmit={onSubmit} form={form} className="space-y-5">
        <FormInput
          control={form.control}
          label="Username"
          placeholder="Enter your username"
          name="username"
          iconSrc={userIcon}
          iconAlt="user"
          type="text"
        />

        <FormInput
          control={form.control}
          label="Email"
          placeholder="Enter your Email"
          name="email"
          iconSrc={emailIcon}
          iconAlt="Email"
          type="email"
        />
        <FormInput
          control={form.control}
          label="Password"
          placeholder="Enter a strong password"
          name="password"
          iconSrc={lockIcon}
          iconAlt="password"
          type="password"
        />

        <CustomButtom className="bg-white text-black">Get started</CustomButtom>
      </FormContainer>
      <aside className="flex flex-col gap-3">
        <section className="flex flex-row gap-2 items-center w-full overflow-hidden justify-center">
          <Separator className=" bg-gray-500 w-2/3" /> <p>OR</p>
          <Separator className=" bg-gray-500 w-2/3" />
        </section>
        <Oauth />
      </aside>
      <p></p>
    </div>
  );
}

export default Register;
