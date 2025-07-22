// app/api/incidents/[id]/resolve/route.ts

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(_: Request, { params }: { params: { id: string } }) {
  try {
    const incident = await prisma.incident.update({
      where: { id: params.id },
      data: { resolved: true },
    });

    return NextResponse.json(incident);
  } catch (error) {
    return NextResponse.json({ error: "Incident not found or update failed" }, { status: 400 });
  }
}
