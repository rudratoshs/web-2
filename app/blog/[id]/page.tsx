import { BlogPost } from "./components/BlogPost"
import { blogPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/layout/Header"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(post => post.id === parseInt(params.id))
  
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