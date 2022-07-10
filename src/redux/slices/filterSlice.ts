import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Sort = {
  name: string;
  sortProperty: "rating" | "title" | "price" | "-rating" | "-title" | "-price";
};

export interface FilterSliceState {
  categoryId: number;
  currentPage: number;
  searchValue: string;
  sort: Sort;
}

const initialState: FilterSliceState = {
  categoryId: 0,
  currentPage: 1,
  searchValue: "",
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSearchValue(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action:PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action:PayloadAction<FilterSliceState>) {
      state.sort = action.payload.sort;
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
      state.sort = action.payload.sort;
    },
  },
});
export const selectSort = (state: RootState) => state.filter.sort;
export const selectFiter = (state: RootState) => state.filter;

export const {
  setCategoryId,
  setSort,
  setCurrentPage,
  setFilters,
  setSearchValue,
} = filterSlice.actions;
export default filterSlice.reducer;
