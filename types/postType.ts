export type Post = {
  id: number;
  title: string;
  content: string;
  authorEmail: string | null;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
};