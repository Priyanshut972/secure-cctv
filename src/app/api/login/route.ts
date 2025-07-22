// src/app/api/login/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === "admin@securesight.dev" && password === "secure123") {
    (await cookies()).set("auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60, 
    });
    return NextResponse.json({ success: true });
  }

  return new NextResponse("Invalid credentials", { status: 401 });
}
