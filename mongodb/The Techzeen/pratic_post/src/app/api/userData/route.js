import mongoose from "mongoose";
import { MONGODB_CONNECT } from "../../../libs/mongodb";
import { NextResponse } from "next/server";
import { User } from "../../../libs/model/user";

export const GET = async () => {
  await mongoose.connect(MONGODB_CONNECT);

  const userData = await User.find();

  return NextResponse.json({ result: userData });
};

export const POST = async (req) => {
  const payload = await req.json();
  await mongoose.connect(MONGODB_CONNECT);
  const empData = new User(payload);

  const response = await empData.save();
  return NextResponse.json({ result: response, success: true });
};
