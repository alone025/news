import { Suspense } from "react";
import Loader from "@/components/loader";
import { fetchPost } from "@/utils/api";
import { NewsPageContent } from "./newsContent";

// Dynamically set metadata
export async function generateMetadata({ searchParams }) {
  const post = searchParams.post;

  if (!post) {
    return {
      title: "News Section",
      description: "Stay updated with the latest news.",
    };
  }

  const dt = await fetchPost(post);

  return {
    title: dt?.title || "News Section",
    description: dt?.subtitle || "Stay updated with the latest news.",
  };
}

// Fetch data server-side
async function getPostData(postId) {
  return await fetchPost(postId);
}

// Page Component
export default async function NewsPage({ searchParams }) {
  const postId = searchParams.post;

  // Fetch data (server-side)
  const postData = await getPostData(postId);

  return (
    <Suspense fallback={<Loader />}>
      <div>
        <NewsPageContent dt={postData} />
      </div>
    </Suspense>
  );
}
