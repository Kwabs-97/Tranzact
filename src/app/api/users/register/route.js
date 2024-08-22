import {
  _createNewUser,
  listFilesAndGetUrls,
  uploadFileDataToDB,
} from "@/actions/actions";
import { NextResponse } from "next/server";
import dbConnect from "@/db/config";

dbConnect();
export async function POST(request) {
  const requestBody = await request.json();

  //extract fields from parsed request body
  const { username, email, password } = requestBody;

  try {
    const { error, statusCode, user, successMessage } = await _createNewUser(
      email,
      username,
      password
    );
    if (error) {
      return NextResponse.json({ message: error }, { status: statusCode });
    }

    return NextResponse.json(
      {
        message: successMessage,
      },
      {
        userData: {
          email: user.email,
          username: user.username,
        },
      },
      { status: statusCode }
    );
  } catch (error) {
    console.log("error registering user", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
