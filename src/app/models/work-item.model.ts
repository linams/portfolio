export interface WorkItem {
  id: string;
  title: string;
  year: string;
  category: string;
  tags: string[];
  description: string;
  thumbnail: string;
  images?: string[];
  sections?: WorkSection[];
}

export interface WorkSection {
  heading?: string;
  subheading?: string;
  content: string;
  image?: string;
}