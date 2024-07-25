"use client";
import Navbar from "@/components/Navbar";
import ItemGrid from "@/components/ItemGrid";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState<string>("HOME");
  return (
    <>
      <Navbar page={page} setPage={setPage} />
      <div className="container mx-auto px-4 py-8">
        {page == "HOME" && <h1 className="text-2xl font-bold mb-4">HOME</h1>}
        {page == "MONSTERS" && (
          <h1 className="text-2xl font-bold mb-4">MONSTERS</h1>
        )}
        {page == "ARMOR" && <h1 className="text-2xl font-bold mb-4">ARMOR</h1>}
        {page == "ITEMS" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">ITEMS</h1>
            <ItemGrid />
          </div>
        )}
      </div>
    </>
  );
}
