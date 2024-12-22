import { STRAPI_URL } from '@/lib/config/strapi';
import { notFound } from 'next/navigation';
import { BlogPost } from '../[id]/components/BlogPost';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/footer/Footer';
import { BlogSidebar } from './components/BlogSidebar';
import { BlogPost as BlogPostType } from '@/lib/blog-data';

export const revalidate = 60; // Revalidate every minute

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

async function getPostBySlug(slug: string): Promise<BlogPostType | null> {
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
    console.error('Error fetching post by slug:', error);
    return null;
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <BlogPost post={post} />
      </main>
      <Footer />
    </>
  )
}