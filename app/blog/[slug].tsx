import { BlogPost } from "./[id]/components/BlogPost";
import { STRAPI_URL } from "@/lib/config/strapi";
import { notFound } from "next/navigation";
import { BlogPost as BlogPostType } from "@/lib/blog-data";

interface BlogPostPageProps {
  params: { slug: string };
}

async function fetchPostBySlug(slug: string): Promise<BlogPostType | null> {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`
    );
    const data = await response.json();

    if (data?.data?.length) {
      return data.data[0];
    }

    return null;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Fetch the post by slug
  const post = await fetchPostBySlug(params.slug);

  // Handle 404 if the post is not found
  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-screen-lg mx-auto py-8 px-4">
      <BlogPost post={post} />
    </div>
  );
}