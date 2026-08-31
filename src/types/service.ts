export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  image?: string;
  icon?: string;
  features: string[];
  benefits: string[];
  faqs?: ServiceFAQ[];
  seoTitle?: string;
  seoDescription?: string;
}
