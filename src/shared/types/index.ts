export interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  stars: number;
}

export interface Pillar {
  num: string;
  title: string;
  description: string;
  icon: string;
}

export interface BookHighlight {
  label: string;
  description: string;
}
