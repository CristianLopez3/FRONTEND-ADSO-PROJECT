export interface Menu {
  id? : number | string | null;
  title: string;
  description: string;
  price: number;
  state: boolean;
}