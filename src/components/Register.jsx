"use client";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormContainer from "./forms/FormContainer";
import { User } from "@/lib/validation";

import FormInput from "./forms/FormInput";
import emailIcon from "../../public/assets/icons/email.svg";
import lockIcon from "../../public/assets/icons/lock.svg";
import userIcon from "../../public/assets/icons/user.svg";
import CustomButtom from "./CustomButtom";
import { Separator } from "@radix-ui/react-separator";
import { useToast } from "@/components/ui/use-toast";
import { LoadingSpinner } from "./ui/loading-spinner";

import Oauth from "./Oauth";
import ErrorMessage from "./ErrorMessage";

function Register() {
  const [formStatus, setformStatus] = useState({ message: "", type: "" });
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
    resolver: zodResolver(User),
  });

  const onSubmit = async (data) => {
    setformStatus({ message: "", type: "" });
    try {
      const response = await axios.post("api/users/register", data);
      if (response.status === 201) {
        setformStatus({ message: response.data.message, type: "success" });
      }
      console.log(response);
      form.reset();
    } catch (error) {
      setformStatus({ message: error.response.data.message, type: "error" });
      console.log(error);
    }
  };

  //toast notification on success
  const { toast } = useToast();

  useEffect(() => {
    if (formStatus.type === "success") {
      toast({
        title: "congratulations",
        description: formStatus.message,
      });
    }
  }, [toast, formStatus]);

  //submit button state handling
  const { isSubmitting } = form.formState;

  return (
    <div className="w-full px-10 ">
      <FormContainer onSubmit={onSubmit} form={form} className="space-y-1">
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

        <CustomButtom className="bg-white text-black" disabled={isSubmitting}>
          {isSubmitting ? <LoadingSpinner /> : "Get started"}
        </CustomButtom>
      </FormContainer>
      {formStatus.type === "error" && (
        <ErrorMessage message={formStatus.message} />
      )}
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
