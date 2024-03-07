export interface Menu {
  id? : number | string | null;
  title: string;
  description: string;
  price: number;
  state: boolean;
  category: Category;
}

export type Category = {
  id: number | string;
  name: string;
}