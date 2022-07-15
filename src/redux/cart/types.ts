// type: может типизировать любой тип + {} []
export type TCartItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
  };
  // interface: может типизировать только обьект {}
  // обычно когда типизируют state используют interface
  export interface CartSliceState {
    totalPrice: number;
    items: TCartItem[];
  }