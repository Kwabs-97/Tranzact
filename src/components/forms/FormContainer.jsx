"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "../ui/button";

function FormContainer({ children, className, onSubmit, form }) {
  //   const form = useForm({
  //     defaultValues: {
  //       email: "",
  //       password: "",
  //     },
  //   });

  //   const onSubmit = (data) => {
  //     console.log(data);
  //   };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`${className} space-y-3 my-10 flex flex-col`}
      >
        {children}
      </form>
    </Form>
  );
}

export default FormContainer;
