import mongoose from "mongoose";

export default async function dbConnect() {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;
    connection.on("success", () => {
      console.log("mongoDB connected successfully");
    });
    connection.on("error", (err) => {
      console.log("error in connection" + err);
      process.exit();
    });
  } catch (error) {
    console.log("Error connecting to mongoDB");
    console.log(error);
  }
}
