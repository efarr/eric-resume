export type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  authorEmail: string | null;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
};