import { getAllPosts } from '@/lib/sanity/utils'
import { BlogGrid } from '@/components/blog/BlogGrid'

export const revalidate = 60 // Revalidate every minute

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="flex-1">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h1 className="text-3xl font-bold lg:text-4xl">Latest Blog Posts</h1>
          <p className="mt-4 text-muted-foreground">
            Stay up to date with the latest trends and technologies
          </p>
        </div>
        <BlogGrid posts={posts} />
      </div>
    </main>
  )
}