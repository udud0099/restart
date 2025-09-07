import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topics/route";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDes: des } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, des });
  return NextResponse.json({ message: "topic edit ok" }, { status: 200 });
}

export async function GET(request, { params }) {
    const {id} = params
  await connectMongoDB();
  const topic = await Topic.findOne({_id:id});
  return NextResponse.json({ topic }, {status:200});
}