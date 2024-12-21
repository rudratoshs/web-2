import { client } from './config'
import { allPostsQuery, postBySlugQuery, allCategoriesQuery } from './queries'

export async function getAllPosts() {
    return await client.fetch(allPostsQuery)
}

export async function getPostBySlug(slug: string) {
    return await client.fetch(postBySlugQuery, { slug })
}

export async function getAllCategories() {
    return await client.fetch(allCategoriesQuery)
}
export function formatDate(date: string | null) {
    if (!date) return 'Draft'
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }