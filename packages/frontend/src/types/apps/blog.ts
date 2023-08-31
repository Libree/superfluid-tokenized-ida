import { StaticImageData } from "next/image";

export type Profile = {
  id?: string | number;
  avatar?: string;
  name?: string;
  time?: string;
};

export interface BlogType {
  id?: string;
  profile?: Profile;
  time?: Date;
  comment?: string;
  replies?: any[];
}

export interface BlogPostType {
  id?: number;
  title?: any;
  content?: string;
  coverImg?: string;
  createdAt?: Date;
  price?: number;
  currencyImg?: StaticImageData;
  share?: number;
  category?: string;
  featured?: boolean;
  author?: Profile;
  comments?: any[];
}
