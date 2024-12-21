export const allPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    "category": category->title,
    "coverImage": mainImage.asset->url,
    publishedAt,
    readingTime,
    "author": author-> {
      name,
      role,
      "avatar": image.asset->url,
      bio
    }
  }`
  
  export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    "category": category->title,
    "coverImage": mainImage.asset->url,
    publishedAt,
    readingTime,
    "author": author-> {
      name,
      role,
      "avatar": image.asset->url,
      bio
    }
  }`

  export const allCategoriesQuery = `*[_type == "category"] {
    _id,
    title,
    description
  }`