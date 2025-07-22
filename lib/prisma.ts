// lib/prisma.ts

import { PrismaClient } from '@prisma/client';

// Use a global variable to avoid multiple PrismaClient instances in dev
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Create or reuse PrismaClient
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'], // Optional: remove if you don’t want SQL logs in terminal
  });

// Only cache the client globally in development
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
