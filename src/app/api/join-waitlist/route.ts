import { db } from "@/app/(web-app)/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse the request body
    const { firstName, lastName, emailAddress } = body;

    const record = await db.emailList.findFirst({
      where: {
        email: emailAddress,
      },
    });

    if (record) {
      throw new Error("Already joined waitlist!");
    }

    // Create a record in the database
    const newRecord = await db.emailList.create({
      data: {
        firstName,
        lastName,
        email: emailAddress,
      },
    });

    return NextResponse.json(newRecord, { status: 201 }); // Success response
  } catch (error) {
    console.error("Error creating record:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
