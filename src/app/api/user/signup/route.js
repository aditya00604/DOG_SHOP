// pages/api/user/route.js
import bcrypt from "bcryptjs";
import connectToMongoDB from "../../../../databse/function/connect";
import User from "../../../../databse/schema/user.js";
import { NextResponse } from "next/server";
connectToMongoDB();

// Export the handler functions for different HTTP methods
export async function POST(request) {
  try {
    const resbody = await request.json();
    // console.log(resbody);
    const { email, username, password } = resbody;
    const salt = await bcrypt.genSalt(10);
    // Encrypt the password using bcrypt.js
    const hashedPassword = await bcrypt.hash(password, salt);

    // Add the user data to the users schema
    const user = new User({
      email,
      username,
      password: hashedPassword,
    });

    const res = await user.save();
    return NextResponse.json(
      {
        message: "User data added successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding user data:", error);
    return NextResponse.json({
      message: "Error adding user data",
      error: error.message,
    });
  }
}

// Export other handlers as needed
