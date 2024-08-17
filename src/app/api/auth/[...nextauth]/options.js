import { _verifyUser } from "@/actions/actions";
import Credentials from "next-auth/providers/credentials";
export const options = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          name: "email",
          placeholder: "Enter your username",
        },
        password: {
          label: "Password",
          type: "password",
          name: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        const user = await _verifyUser(email, password);
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};
