import React from "react";
import { ItemType } from "../interfaces/items";

const ItemCard = ({
  id,
  name,
  description,
  rarity,
  value,
  carryLimit,
}: ItemType) => {
  return (
    <div className=" mt-10 w-52 h-100 bg-slate-100 bg- text-slate-950 rounded-md shadow-lg">
      <div className="flex">
        <div className="w-1/2 p-2 text-left">
          <p className="text-xs">{`ID: ${id}`}</p>
        </div>
        <div className="w-1/2 p-2 text-right">
          <p
            className={`text-xs font-medium text-rarity-${rarity}`}
          >{`Rarity ${rarity}`}</p>
        </div>
      </div>
      <div className="w-full h-24 flex justify-center items-center">
        <img
          src="/images/no_image.png"
          alt="no_image.png"
          width={70}
          height={70}
        />
      </div>
      <div className="p-3">
        <h3 className="text-m mb-3 font-medium">{name ? name : "no_name"}</h3>
        <p className="text-xs mb-3 h-16 ">
          {description ? description : "no_description"}
        </p>
        <div className="flex align-middle justify-center items-cente">
          <p className="text-xs text-left mb-3 w-1/2">
            value: {value ? `${value}z` : "0z"}
          </p>
          <p className="text-xs text-right mb-3 w-1/2">
            carry limit: {carryLimit ? carryLimit : 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
