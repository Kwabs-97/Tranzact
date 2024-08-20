"use client";
import React from "react";
import { Form } from "@/components/ui/form";

function FormContainer({ children, className, onSubmit, form }) {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`${className} my-5 flex flex-col space-y-6`}
      >
        {children}
      </form>
    </Form>
  );
}

export default FormContainer;
