import dbConnect from "@/db/config";
import User from "../models/user.model";
import bcryptjs from "bcryptjs";

dbConnect();

export const _findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.log("Error finding user:", error);
    throw new Error("database query failed");
  }
};

export const _createNewUser = async (email, username, password) => {
  try {
    const existingUser = await _findUserByEmail(email);
    if (existingUser) {
      return { error: "user already exists", statusCode: 409 };
    }

    const saltRounds = await bcryptjs.genSalt(10); // 10 is a common default
    const hash_password = await bcryptjs.hash(password, saltRounds);

    const newUser = new User({
      email,
      password: hash_password,
      username,
    });

    const savedUser = await newUser.save();
    return {
      user: savedUser,
      statusCode: 201,
      successMessage: "user created successfully",
    };
  } catch (error) {
    console.log("Error creating new user:", error);
    throw error;
  }
};

export const _verifyUser = async (email, password) => {
  try {
    const user = await _findUserByEmail(email);
    if (!user) {
      return { message: "User not found" };
    }

    const isMatch = await bcryptjs.compare(password, user.password);

    if (isMatch) {
      return {
        data: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
      };
    } else {
      return { message: "Invalid credentials" };
    }
  } catch (error) {
    console.log("Error verifying user:", error);
    throw error;
  }
};
