export interface StrapiResponse<T> {
    data: T[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }
  
  export interface StrapiImage {
    data: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    };
  }
  
  export interface StrapiAuthor {
    data: {
      attributes: {
        name: string;
        role: string;
        avatar: StrapiImage;
        bio:string;
      };
    };
  }

  export interface Post {
    id: number;
    attributes: {
      title: string;
      excerpt: string;
      content: string;
      slug: string;
      category: string;
      coverImage: StrapiImage;
      author: StrapiAuthor;
      publishedAt: string;
      readTime: string;
    };
  }
  
  export interface MenuItem {
    id: number;
    attributes: {
      label: string;
      url: string;
      order: number;
      parent: {
        data: {
          id: number;
        } | null;
      };
    };
  }

  export interface Portfolio {
    id: number;
    documentId: string;
    Title: string;
    description: Array<{
      type: string;
      children: Array<{
        type: string;
        text: string;
      }>;
    }>;
    technologies: string[];
    color: string;
    link: string;
    date: string;
    team: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    categories: Array<{
      id: number;
      documentId: string;
      name: string;
      slug: string;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    }>;
    images: Array<{
      id: number;
      documentId: string;
      name: string;
      alternativeText?: string | null;
      caption?: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail?: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          width: number;
          height: number;
          size: number;
          sizeInBytes: number;
          url: string;
        };
        small?: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          width: number;
          height: number;
          size: number;
          sizeInBytes: number;
          url: string;
        };
        medium?: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          width: number;
          height: number;
          size: number;
          sizeInBytes: number;
          url: string;
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string | null;
      provider: string;
      provider_metadata?: any | null;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    }>;
  }