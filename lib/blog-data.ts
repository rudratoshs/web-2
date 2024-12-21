export interface BlogPost {
    _id: string;
    title: string;
    excerpt: string;
    categories: Array<{
      _id: string;
      title: string;
    }>;
    author: {
      name: string;
      role: string;
      avatar: string;
      bio: string;
    };
    coverImage: string;
    publishedAt: string;
    readingTime: string;
    body: any;
  }
  export const blogPosts: BlogPost[] = [
  ];