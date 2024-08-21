import dbConnect from "@/db/config";
import User from "../models/user.model";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { storage, db } from "@/firebase/firebase";
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

export const listFilesAndGetUrls = async () => {
  try {
    const listRef = ref(storage, "bags/");
    const res = await listAll(listRef);

    const files = await Promise.all(
      res.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return {
          name: itemRef.name,
          url: url,
        };
      })
    );

    return files;
  } catch (error) {
    console.error("Error listing files", error);
  }
};

export const uploadFileDataToDB = async () => {
  try {
    const files = await listFilesAndGetUrls();
    const collectionRef = collection(db, "bags");

    for (const file of files) {
      //query to check if file already exists.

      const q = query(collectionRef, where("url", "==", file.url));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        await addDoc(collectionRef, {
          name: file.name,
          url: file.url,
          createdAt: new Date(),
        });
      } else {
        console.log("file already exists");
      }
    }

    console.log("Data successfully uploaded to firestore");
  } catch (error) {
    console.error("Error uploading files to firestore", error);
  }
};
