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
    throw error;
  }
};

export const _createNewUser = async (email, username, password) => {
  try {
    const existingUser = await _findUserByEmail(email);
    if (existingUser) {
      return { message: "User with this email already exists" };
    }

    const saltRounds = await bcryptjs.genSalt(10); // 10 is a common default
    const hash_password = await bcryptjs.hash(password, saltRounds);

    const newUser = new User({
      email,
      password: hash_password,
      username,
    });

    const saveUser = await newUser.save();
    return {
      message: "User created successfully",
      data: { email: saveUser.email, username: saveUser.username },
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
