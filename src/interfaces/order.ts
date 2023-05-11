export interface IOrder {
  id: string;
  name: string;
  articles: IOrderArticle[];
  price: number;
  total: number;
}

export interface IOrderArticle extends IArticle {
  quantity: number;
}

export interface IArticle {
  id: string;
  name: string;
  description: string;
  price: number;
  tax: number;
}
