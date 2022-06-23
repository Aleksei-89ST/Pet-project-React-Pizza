import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import { useEffect, useState } from "react";
import "./scss/components/app.scss";


function App() {
  const [items, setItems] = useState([]);
useEffect(() => {
  fetch("https://62b41f5aa36f3a973d2c669d.mockapi.io/items")
  .then((res) => res.json())
  .then((arr) => {
    setItems(arr);
  });
}, [])
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
