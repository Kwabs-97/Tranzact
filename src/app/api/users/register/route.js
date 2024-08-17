import { _createNewUser } from "@/actions/actions";
import { NextResponse } from "next/server";
import User from "@/models/user.model";
import dbConnect from "@/db/config";
import bcryptjs from "bcryptjs";
dbConnect();
export async function POST(request) {
  const requestBody = await request.json();

  //extract fields from parsed request body
  const { username, email, password } = requestBody;

  //check if user exists
  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return NextResponse.json(
        { message: "user with email already exists" },
        { status: 401 }
      ); //unauthorized;

    //if user does not already exist, create new user
    //hash password and upload the hashed password into the db
    const salt = await bcryptjs.genSalt(10);
    const hashed_password = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashed_password,
    });
    //save user to db
    const savedUser = await newUser.save();

    //send success response and user details to the frontend
    return NextResponse.json(
      {
        message: "registration successful",
        data: {
          username: savedUser.username,
          email: savedUser.email,
        },
      },
      { status: 200 } //success
    );
  } catch (error) {
    console.log("error registering user", error);
  }
}
