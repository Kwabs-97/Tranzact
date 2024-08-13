import React from "react";
import FormContainer from "./forms/FormContainer";
import FormInput from "./forms/FormInput";
import { useForm } from "react-hook-form";
import userIcon from "../../public/assets/icons/user.svg";
import CustomButtom from "./CustomButtom";
import { Separator } from "@radix-ui/react-separator";
import Oauth from "./Oauth";

function Register() {
  const form = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
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
          label="Firstname"
          placeholder="Firstname"
          name="firstname"
          iconSrc={userIcon}
          iconAlt="firstname"
          type="text"
        />

        <CustomButtom className="bg-white text-black">
          Continue with email
        </CustomButtom>
      </FormContainer>
      <aside className="flex flex-col gap-6">
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
