export type BlogPreview = {
  image: string;
  tags: string[];
  datePublished: string;
  title: string;
  description: string;
  author: {
    name: string;
    image: string;
  };
};
