import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";


// если уверен что все обьекты это строки то можно делать с помощью Record!
export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
  "pizza/fetchPizzasStatus",

  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://62b41f5aa36f3a973d2c669d.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

type Pizza = {
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

interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,
};
const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },
  // Чтобы типизировать extraReducers нужно следовать примеру с builder.addCase
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      (state.status = Status.LOADING), (state.items = []);
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCES;
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});
// это вариант если не нужна типизация extraReducers
// extraReducers: {
//   [fetchPizzas.pending]: (state) => {
//     state.status = "loading";
//     state.items = [];
//   },
//   [fetchPizzas.fulfilled]: (state, action) => {
//     state.items = action.payload;
//     state.status = "success";
//   },
//   [fetchPizzas.rejected]: (state) => {
//     state.status = "error";
//     state.items = [];
//   },
// },
export const selectPizzaData = (state: RootState) => state.pizza;

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
