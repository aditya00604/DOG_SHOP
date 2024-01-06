import bcrypt from "bcryptjs";
import User from "../../../../databse/schema/user";
import connectToMongoDB from "../../../../databse/function/connect";
import { NextResponse } from "next/server";

connectToMongoDB();

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Find user by email
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return new NextResponse(JSON.stringify({ message: "Invalid password" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000); // Set expiry date to 24 hours from now
    // Use the response object to set cookies

    return new NextResponse(JSON.stringify({ message: "Login successful" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    return new NextResponse(
      JSON.stringify({ message: "Server error", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
