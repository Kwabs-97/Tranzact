import dbConnect from "../../db/config";
import User from "../../models/user.model";
import bcryptjs from "bcryptjs";
dbConnect();

export const _findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (user) return { message: "user found", user };
    return { message: "user not found" };
  } catch (error) {
    console.log(error);

    return "error finding user", error;
  }
};

export const _createNewUser = async (email, username, password) => {
  try {
    const isUserExists = await _findUserByEmail(email);
    if (isUserExists) return { message: "user with this email already exists" };

    const saltRounds = await bcryptjs.genSalt(20);
    const hash_password = await bcryptjs.hash(password, saltRounds);

    const newUser = new User({
      email,
      password: hash_password,
      username,
    });

    const saveUser = await newUser.save();
    return {
      message: "user created successfully",
      data: { email: saveUser.email, username: saveUser.username },
    };
  } catch (error) {
    console.log("error creating new user", error);
    return "error creating user account", error;
  }
};

export const _verifyUser = async (email, password) => {
  try {
    const user = await _findUserByEmail(email);
    const isMatch = await bcryptjs.compare(password, user.hash_password);

    if (user && isMatch) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};
