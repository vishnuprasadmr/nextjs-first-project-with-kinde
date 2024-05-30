import React from "react";
import Link from "next/link";
import prisma from "@/lib/db";

async function PostsList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await prisma.post.findMany();
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id} className="mb-3">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default PostsList;
