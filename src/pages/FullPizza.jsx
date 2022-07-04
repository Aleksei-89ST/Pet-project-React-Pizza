import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FullPizza = () => {
  const [pizza, setpizza] = useState();
  const { id } = useParams();
  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://62b41f5aa36f3a973d2c669d.mockapi.io/items/" + id
        );
        setpizza(data);
      } catch (error) {
        alert("ошибка при получении пиццы!");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return "Загрузка...";
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};

export default FullPizza;
