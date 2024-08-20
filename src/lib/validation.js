import * as z from "zod";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
export const User = z.object({
  username: z
    .string({
      required_error: "Please enter your username",
    })
    .min(5, { message: "username must contain at least 5 characters" })
    .trim(),
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
