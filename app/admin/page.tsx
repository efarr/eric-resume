"use client";

import { useUser, SignedOut, SignInButton, SignedIn } from "@clerk/nextjs";
import { getUserByEmail } from "@/actions/userActions";
import { getPosts, deletePost } from "@/actions/postActions";
import { useEffect, useState } from "react";
import { User } from "@/types/userType";
import { Post } from "@/types/postType";
import Link from "next/link";

export default function AdminPage() {
  const { user } = useUser();
  const [userData, setUserData] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (user) {
      getUserByEmail(user.emailAddresses[0].emailAddress).then((data) => {
        setUserData(data[0]); // Take first user from array
      });

      // Fetch all posts
      fetchPosts();
    }
  }, [user]);

  const fetchPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  const handleDeletePost = async (id: number) => {
    if (confirm("Are you sure you want to delete this post?")) {
      setIsDeleting(true);
      try {
        await deletePost(id);
        // Remove post from state to avoid refetching
        setPosts(posts.filter((post) => post.id !== id));
      } catch (error) {
        console.error("Error deleting post:", error);
        alert("Failed to delete post");
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
      <SignedOut>
        <SignInButton>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <div className="flex items-center justify-between mb-6">
          <p className="text-lg">Welcome {userData?.name}</p>
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">All Posts</h2>
            <Link
              href="/admin/new-post"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Create New Post
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left">ID</th>
                  <th className="py-2 px-4 border-b text-left">Title</th>
                  <th className="py-2 px-4 border-b text-left">Status</th>
                  <th className="py-2 px-4 border-b text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.length > 0 ? (
                  posts.map((post) => (
                    <tr key={post.id}>
                      <td className="py-2 px-4 border-b">{post.id}</td>
                      <td className="py-2 px-4 border-b">{post.title}</td>
                      <td className="py-2 px-4 border-b">
                        {post.published ? (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                            Published
                          </span>
                        ) : (
                          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                            Draft
                          </span>
                        )}
                      </td>
                      <td className="py-2 px-4 border-b">
                        <div className="flex space-x-2">
                          <Link
                            href={`/admin/new-post?id=${post.id}`}
                            className="text-blue-500 hover:text-blue-700 focus:outline-none"
                            title="Edit post"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </Link>
                          <button
                            onClick={() => handleDeletePost(post.id)}
                            disabled={isDeleting}
                            className="text-red-500 hover:text-red-700 focus:outline-none"
                            title="Delete post"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="py-4 px-4 text-center text-gray-500"
                    >
                      No posts found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </SignedIn>
    </div>
  );
}
