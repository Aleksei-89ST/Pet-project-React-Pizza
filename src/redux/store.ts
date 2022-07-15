import { configureStore } from "@reduxjs/toolkit";
import filter from "./filter/slice";
import cart from "./cart/slice";
import pizza from "./pizza/slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});
// главный state(получение типа всего хранилища) c помощью typeof говорим дай мне тип store
// если нужно из функции вытащить только её содержимое для этого есть - ReturnType- это спец тип он берёт содержимое  и привращает в ТИП
export type RootState = ReturnType<typeof store.getState>;

//превращаю js функцию в тип  и сохрани её в переменную
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
