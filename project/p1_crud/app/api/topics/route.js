import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topics/";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, des } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, des });
  return NextResponse.json({ message: "topic create" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic delete" }, { status: 200 });
}
