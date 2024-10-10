export interface Image {
  id: string;
  alt_description: string;
  color: string;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    name: string;
    total_likes: number;
  };
}

export interface User {
  name: string;
  total_likes: number;
}
