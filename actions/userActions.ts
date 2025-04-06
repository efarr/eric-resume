"use server";
import { eq, not } from "drizzle-orm";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
export const getData = async () => {
  const data = await db.select().from(users);
  return data;
};

export const getUserByEmail = async (email: string) => {
  const data = await db.select().from(users).where(eq(users.email, email));
  return data;
};
