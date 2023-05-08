export interface IOrder {
  id: string;
  name: string;
  articles: IArticle[];
  price: number;
  total: number;
}

export interface IArticle {
  id: string;
  name: string;
  description: string;
  price: number;
  tax: number;
}
