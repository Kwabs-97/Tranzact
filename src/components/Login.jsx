"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import FormInput from "./forms/FormInput";
import userIcon from "../../public/assets/icons/user.svg";
import emailIcon from "../../public/assets/icons/email.svg";
import { Button } from "./ui/button";
import Link from "next/link";

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
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 my-3">
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
          <Button type="submit" className="border border-gray-300">
            Login
          </Button>
        </form>
        <p>
          Do not have an account?
          <i>
            <Link href="/register">Get started Here</Link>
          </i>
        </p>
      </Form>
    </div>
  );
}

export default Login;
