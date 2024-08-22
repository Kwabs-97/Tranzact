"use client";

import Register from "@/components/Register";
import Container from "@/components/Container";
import MoveLeftIcon from "@/assets/icons/MoveLeftIcon";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  return (
    <Container>
      <div
        className="self-start px-10 py-4"
        onClick={() => {
          router.push("/");
        }}
      >
        <MoveLeftIcon />
      </div>
      <h4>Hello, 👋 Welcome to Tranz@</h4>
      <p>Create an account</p>
      <Register />
    </Container>
  );
}

export default Page;
