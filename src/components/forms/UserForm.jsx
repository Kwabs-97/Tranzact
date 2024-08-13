"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import FormInput from "../FormInput";
import user from "../../../public/assets/icons/user.svg";
import { Button } from "../ui/button";
import Link from "next/link";

function UserForm() {
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormInput
            control={form.control}
            label="Email"
            placeholder="Email/Username "
            name="email"
            iconSrc={user}
            iconAlt="user"
            type="email"
          />
          <FormInput
            control={form.control}
            label="Password"
            placeholder="Password"
            name="password"
            iconSrc={user}
            iconAlt="user"
            type="password"
          />
          <Button type="submit" className="border border-gray-300">
            Submit
          </Button>
        </form>
        <p>
          Don't have an account?
          <i>
            <Link href="/register">Get started Here</Link>
          </i>
        </p>
      </Form>
    </div>
  );
}

export default UserForm;
