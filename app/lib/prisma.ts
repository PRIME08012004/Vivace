import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
//@ts-ignore
const prisma = globalThis.prisma ?? new PrismaClient({ adapter });
//@ts-ignore
if(process.env.NODE_ENV !== "production")globalThis.prisma= prisma


export { prisma };