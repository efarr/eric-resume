import { relations } from "drizzle-orm";
import { integer, text, boolean, pgTable, timestamp, serial } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
});

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  authorEmail: text("author_email").references(() => users.email),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  published: boolean("published").default(false).notNull(),
});

// Create relationships
export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.authorEmail],
    references: [users.email],
  }),
}));