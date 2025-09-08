import { connectString } from "@/lib/database/db-connection";
import { User } from "@/lib/database/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
  await mongoose.connect(connectString);

  const userData = await User.find()
  return NextResponse.json({ result: userData });
//   return NextResponse.json({ result: "ok" });
};
