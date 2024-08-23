import { fetchImageData } from "@/actions/actions";
import dbConnect from "@/db/config";
import { NextResponse } from "next/server";
dbConnect();
export async function GET(req) {
  try {
    const imageData = await fetchImageData();
    const response = NextResponse.json(
      { message: imageData.message, imgData: imageData.imageData },
      { status: imageData.statusCode }
    );

    response.headers.set(
      "Cache-Control",
      "public max-age=43,200, stale-while-revalidate=59"
    );

    return response;
  } catch (error) {
    console.log("Internal Error", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
