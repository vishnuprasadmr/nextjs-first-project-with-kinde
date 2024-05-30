import Post from "@/components/post";
import React, { Suspense } from "react";

async function page({ params }: { params: { id: string } }) {
  return (
    <main className="px-7 pt-24 text-center">
      <Suspense fallback="Loading...">
        <Post id={params.id} />
      </Suspense>
    </main>
  );
}

export default page;
