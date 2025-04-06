"use server";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { posts } from "@/db/schema";

export const getData = async () => {
  const data = await db.select().from(posts);
  return data;
};

export async function createPost(formData: FormData) {
  // Extract data from the form
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const published = formData.has("published");
  const authorEmail = formData.get("authorEmail") as string;

  if (!title || !content || !authorEmail) {
    throw new Error("Title, content, and author are required");
  }

  try {
    await db.insert(posts).values({
      title,
      content,
      authorEmail,
      published,
    });

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error creating post:", error);
    throw new Error("Failed to create post");
  }
}