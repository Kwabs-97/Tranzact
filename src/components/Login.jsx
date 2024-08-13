"use client";
import React from "react";
import { useForm } from "react-hook-form";

import FormInput from "./forms/FormInput";
import userIcon from "../../public/assets/icons/user.svg";
import emailIcon from "../../public/assets/icons/email.svg";

import Link from "next/link";
import FormContainer from "./forms/FormContainer";
import CustomButtom from "./CustomButtom";
import Oauth from "./Oauth";
import { Separator } from "./ui/separator";

function Login() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full px-10">
      <FormContainer onSubmit={onSubmit} form={form}>
        <FormInput
          control={form.control}
          label="Email"
          placeholder="user@email.com"
          name="email"
          iconSrc={emailIcon}
          iconAlt="user"
          type="email"
        />
        <FormInput
          control={form.control}
          label="Password"
          placeholder="Password"
          name="password"
          iconSrc={userIcon}
          iconAlt="user"
          type="password"
        />

        <Link className="text-green-500" href="/resetPassword">
          Forgot password?
        </Link>

        <CustomButtom className="bg-white text-black">Login</CustomButtom>
      </FormContainer>

      <aside className="flex flex-col gap-6">
        <section className="flex flex-row gap-2 items-center w-full overflow-hidden justify-center">
          <Separator className=" bg-gray-500 w-2/3" /> <p>OR</p>
          <Separator className=" bg-gray-500 w-2/3" />
        </section>
        <Oauth />
      </aside>
      <p>
        Do not have an account?
        <i>
          <Link href="/register" className="place-self-end">
            Get started Here
          </Link>
        </i>
      </p>
    </div>
  );
}

export default Login;
