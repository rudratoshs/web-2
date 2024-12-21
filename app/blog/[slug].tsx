import { BlogPost } from "./[id]/components/BlogPost";
import { getAllPosts } from "@/lib/sanity/utils";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Fetch all posts
  const posts = await getAllPosts();

  // Find the specific post by slug
  const post = posts.find((post) => post.slug.current === params.slug);

  // Handle 404 if post is not found
  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-screen-lg mx-auto py-8 px-4">
      <BlogPost post={post} />
    </div>
  );
}