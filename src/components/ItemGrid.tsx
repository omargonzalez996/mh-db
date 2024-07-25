import React, { useState, useEffect } from "react";
import { getData } from "@/api/data";
import ItemCard from "./ItemCard";
import { ItemType } from "@/interfaces/items";

const ItemGrid = () => {
  let url = "https://mhw-db.com";
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    setLoading(true);
    try {
      let items: any = await getData(`${url}/items`);
      setItems(items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      throw new Error("Error al obtener items");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    console.log("useEffect - ", items);
  }, [items]);

  return (
    <div className="grid sm:gap-3 md:gap-4 lg:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {loading ? (
        <h2>LOADING . . .</h2>
      ) : (
        items.map((item: ItemType) => (
          <ItemCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            carryLimit={item.carryLimit}
            rarity={item.rarity}
            value={item.value}
          />
        ))
      )}
    </div>
  );
};

export default ItemGrid;
