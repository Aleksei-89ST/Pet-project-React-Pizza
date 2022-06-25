

import Categories from "../components/Categories";
import { useEffect, useState } from "react";
import Skeleton from "../components/Pizza-Block/Skeleton";
import PizzaBlock from "../components/Pizza-Block";
import Sort from "../components/Sort";

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId,setCategoryId] = useState(0);
    const [sortType, setSortType] = useState(0);
    useEffect(() => {
      setIsLoading(true)
      fetch("https://62b41f5aa36f3a973d2c669d.mockapi.io/items?category=" + categoryId)
        .then((res) => res.json())
        .then((arr) => {
          setItems(arr);
          setIsLoading(false)
        });
        window.scrollTo(0, 0)
    }, [categoryId]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)}/>
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
