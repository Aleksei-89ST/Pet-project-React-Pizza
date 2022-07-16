import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "./scss/components/app.scss";
import NotFound from "./pages/NotFound";
import MainLayout from "./Layouts/MainLayout";
import React, { Suspense } from "react";

// подгрузка Cart только усли это необходимо
const Cart = React.lazy(() => import("./pages/Cart"));
const FullPizza = React.lazy(() => import("./pages/FullPizza"));

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
            <Suspense fallback={<div>Идёт загрузка пиццы...</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;
