"use client";
import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import ErrorMessage from "../ErrorMessage";

const RenderInput = ({
  iconSrc,
  iconAlt,
  placeholder,
  type,
  field,

  name,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex rounded-md border border-dark-500 bg-dark-400">
        {iconSrc && (
          <Image
            src={iconSrc}
            height={24}
            width={24}
            alt={iconAlt || "icon"}
            className="ml-2"
          />
        )}
        <FormControl>
          <Input
            placeholder={placeholder}
            {...field}
            type={type}
            className="border-none bg-transparent focus:outline-none w-full"
          />
        </FormControl>
      </div>
      <FormMessage />
    </div>
  );
};

function FormInput({
  control,
  label,
  name,
  iconSrc,
  iconAlt,
  type,
  placeholder,
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <RenderInput
            field={field}
            iconSrc={iconSrc}
            iconAlt={iconAlt}
            placeholder={placeholder}
            type={type}
            name={name}
          />
        </FormItem>
      )}
    />
  );
}

export default FormInput;
