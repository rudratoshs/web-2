export const allPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    "categories": categories[]->{ 
      _id,
      title,
      slug
    },
    "coverImage": mainImage.asset->url,
    publishedAt,
    "readingTime": round(length(pt::text(body)) / 5 / 180), // Estimates reading time based on word count
    "author": {
      "name": author->name,
      "role": author->role,
      "avatar": author->image.asset->url,
      "bio": author->bio
    }
  }`
  
  export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    "categories": categories[]->{ 
      _id,
      title,
      slug
    },
    "coverImage": mainImage.asset->url,
    publishedAt,
    "readingTime": round(length(pt::text(body)) / 5 / 180), // Estimates reading time based on word count
    "author": {
      "name": author->name,
      "role": author->role,
      "avatar": author->image.asset->url,
      "bio": author->bio
    }
  }`
  

  export const allCategoriesQuery = `*[_type == "category"] {
    _id,
    title,
    description
  }`