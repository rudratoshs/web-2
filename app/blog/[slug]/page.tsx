import { getPostBySlug } from '@/lib/sanity/utils'
import { notFound } from 'next/navigation'
import { BlogPost } from '../[id]/components/BlogPost'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/footer/Footer'
import {BlogSidebar} from './components/BlogSidebar'
export const revalidate = 60 // Revalidate every minute

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
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