import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const cameras = await prisma.camera.createMany({
    data: [
      { name: "Shop Floor A", location: "Building 1" },
      { name: "Vault", location: "Basement" },
      { name: "Entrance", location: "Main Gate" }
    ],
  });

  const cameraList = await prisma.camera.findMany();

  const threats = ["Unauthorised Access", "Gun Threat", "Face Recognised"];
  const now = new Date();

  await prisma.incident.createMany({
    data: Array.from({ length: 12 }).map((_, i) => ({
      cameraId: cameraList[i % 3].id,
      type: threats[i % 3],
      tsStart: new Date(now.getTime() - (i + 1) * 60 * 60 * 1000),
      tsEnd: new Date(now.getTime() - i * 60 * 60 * 1000),
      thumbnailUrl: `/thumbnails/thumb${(i % 3) + 1}.jpg`,
      resolved: i % 2 === 0
    }))
  })
}

main()
