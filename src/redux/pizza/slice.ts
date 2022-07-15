import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPizzas } from "./asyncActions";
import { Pizza, PizzaSliceState, Status } from "./types";

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
      state.status = Status.LOADING;
      state.items = [];
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
export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
