import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza, TSearchPizzaParams } from "./types";

// если уверен что все обьекты это строки то можно делать с помощью Record!
export const fetchPizzas = createAsyncThunk<Pizza[], TSearchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://62b41f5aa36f3a973d2c669d.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);
