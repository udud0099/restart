"use client";

import { useQuery } from "@tanstack/react-query";

type Post = {
  id: number;
  title: string;
  body: string;
};

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default function PostsList() {
  const { data, isLoading, isError, error } = useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading posts…</div>;
  if (isError)
    return <div className="text-red-600">Error: {error.message}</div>;

  const posts = data?.slice(0, 2) ?? [];

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">{post.title}</h3>
          <p className="mt-2 text-gray-600">{post.body}</p>
        </div>
      ))}
    </div>
  );
}
