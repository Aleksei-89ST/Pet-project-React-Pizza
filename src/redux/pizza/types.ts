export type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};
// Перечисление — это специальный «класс», представляющий группу констант (неизменяемых переменных).
export enum Status {
  LOADING = "loading",
  SUCCES = "success",
  ERROR = "error",
}
export type TSearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};
export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}
