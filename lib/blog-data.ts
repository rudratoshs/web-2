export interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: {
    id: number;
    documentId: string;
    name: string;
    alternativeText?: string;
    caption?: string;
    width: number;
    height: number;
    formats: {
      thumbnail: {
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
      large?: {
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
  };
  author: {
    id: number;
    documentId: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  category: {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  blocks: Array<
    | {
        __component: "shared.rich-text";
        id: number;
        body: string;
      }
    | {
        __component: "shared.quote";
        id: number;
        title: string;
        body: string;
      }
    | {
        __component: "shared.media";
        id: number;
      }
    | {
        __component: "shared.slider";
        id: number;
      }
  >;
}