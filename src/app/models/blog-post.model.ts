
export interface BlogPost {
  id: string;
  title: string;
  date: string;
  categories: string[];
  excerpt: string;
  content?: string;
}