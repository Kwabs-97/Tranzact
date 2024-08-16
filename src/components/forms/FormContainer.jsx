"use client";
import React from "react";
import { Form } from "@/components/ui/form";


function FormContainer({ children, className, onSubmit, form }) {

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
