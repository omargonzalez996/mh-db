import React from "react";
import { NavbarPage } from "@/interfaces/items";

const Navbar = ({ page, setPage }: NavbarPage) => {
  const list_item_common =
    "mx-2 cursor-pointer px-5 font-medium border-2 border-background box-border transition duration-500 ease-in-out transform hover:scale-110";
  const selected =
    "bg-potion-green rounded-md border-2 border-solid border-black shadow-md box-border";
  return (
    <div className="flex justify-center align-middle items-center h-16 shadow-md">
      <div className="flex justify-center w-1/4">
        <img src="/images/no_image.png" alt="logo.png" width={50} />
      </div>
      <div className="flex justify-end w-3/4 antialiased">
        <ul className="flex">
          <li
            className={`${list_item_common} ${
              page == "HOME" ? selected : null
            }`}
            onClick={() => setPage("HOME")}
          >
            Home
          </li>
          <li
            className={`${list_item_common} ${
              page == "MONSTERS" ? selected : null
            }`}
            onClick={() => setPage("MONSTERS")}
          >
            Monsters
          </li>
          <li
            className={`${list_item_common} ${
              page == "ARMOR" ? selected : null
            }`}
            onClick={() => setPage("ARMOR")}
          >
            Armor
          </li>
          <li
            className={`${list_item_common} ${
              page == "ITEMS" ? selected : null
            }`}
            onClick={() => setPage("ITEMS")}
          >
            Items
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
