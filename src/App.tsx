import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "./scss/components/app.scss";
import MainLayout from "./Layouts/MainLayout";
import React, { Suspense } from "react";

// подгрузка Cart только усли это необходимо
const Cart = React.lazy(() => import(/* webpackChunkName:'Cart' */"./pages/Cart"));
const FullPizza = React.lazy(() => import(/* webpackChunkName:'FullPizza' */"./pages/FullPizza"));
const NotFound = React.lazy(() => import(/* webpackChunkName:'NotFound' */"./pages/NotFound"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Идёт загрузка страницы...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
export default App;
