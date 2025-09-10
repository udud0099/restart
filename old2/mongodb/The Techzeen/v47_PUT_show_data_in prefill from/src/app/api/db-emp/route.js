import { connectionString } from "@/lib/database/db_connection";
import { Employee } from "@/lib/database/model/employee";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
  await mongoose.connect(connectionString);
  const empData = await Employee.find();

  return NextResponse.json({ result: empData });
  //   return NextResponse.json({ result: "ok" });
};

// export const POST = async () => {
//   await mongoose.connect(connectionString);
//   const empData = new Employee({
//     name: "sabita",
//     salary: "1k",
//     dep: "manager",
//   });

//   const response = await empData.save();
//   return NextResponse.json({ result: response });
// };

export const POST = async (req) => {
  const payload = await req.json();
  await mongoose.connect(connectionString);
  const empData = new Employee(payload);

  const response = await empData.save();
  return NextResponse.json({ result: response, success: true });
};
