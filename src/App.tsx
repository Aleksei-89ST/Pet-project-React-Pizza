import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "./scss/components/app.scss";
import NotFound from "./pages/NotFound";
// import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";
import MainLayout from "./Layouts/MainLayout";
import React, { Suspense } from "react";

// подгрузка Cart только усли это необходимо 
const Cart = React.lazy(() => import('./pages/Cart'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={
        <Suspense  fallback={<div>Идёт загрузка корзины...</div>}>
          <Cart/>
        </Suspense>
        }/>
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;
