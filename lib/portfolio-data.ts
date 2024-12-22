export interface Portfolio {
  id: number;
  title: string;
  description: string;
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
  images: {
    id: number;
    formats: {
      medium?: { url: string };
      small?: { url: string };
    };
  }[];
  technologies: string[];
  color: string;
  link: string;
  date: string;
  team: string;
}