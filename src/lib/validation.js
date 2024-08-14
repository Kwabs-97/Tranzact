import * as z from "zod";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
export const User = z.object({
  firstname: z
    .string({
      required_error: "Please your firstname",
    })
    .trim()
    .optional(),
  lastname: z
    .string({
      required_error: "Please your lastname",
    })
    .trim()
    .optional(),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password should contain at least 8 characters" })
    .regex(passwordRegex, { message: "Please enter a strong password" })
    .trim(),
  email: z
    .string({ required_error: "email is required" })
    .email({ message: "Please enter a valid email address" })
    .regex(emailRegex)
    .trim()
    .toLowerCase(),
});
