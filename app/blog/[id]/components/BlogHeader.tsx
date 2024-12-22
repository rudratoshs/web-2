import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { STRAPI_URL } from "@/lib/config/strapi";

interface BlogHeaderProps {
  post: {
    title: string;
    categories: Array<{
      id: number;
      name: string;
    }>;
    author: {
      name: string;
      role?: string;
      avatar: {
        url: string;
      };
    };
    publishedAt: string;
    readingTime?: string;
  };
}

export function BlogHeader({ post }: BlogHeaderProps) {
  console.log('post',post)
  // Build the avatar URL dynamically
  const authorAvatarUrl = post.author?.avatar?.url
    ? `${STRAPI_URL}${post.author.avatar.url}`
    : "/default-avatar.jpg";

  return (
    <div className="relative py-10 lg:py-16">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8">
          <div className="max-w-3xl">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <span
                    key={category.id}
                    className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-primary/10 text-primary"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl font-bold lg:text-5xl lg:leading-tight mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4">
              {/* Author info */}
              <div className="flex items-center gap-2">
                <div className="relative size-10 rounded-full overflow-hidden">
                  <Image
                    src={authorAvatarUrl}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {post.author.role || "Author"}
                  </p>
                </div>
              </div>

              {/* Date and Read Time */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="size-4" />
                  {new Date(post.publishedAt).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="size-4" />
                  {post.readingTime ? `${post.readingTime} min read` : "5 min read"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}