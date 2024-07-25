import React, { useState } from "react";

interface SearchBarProps {
  items: any[];
}

const SearchBar: React.FC<SearchBarProps> = ({ items }) => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const queryValue = e.target.value;
    setQuery(queryValue);
    const filteredItems = items.filter((item) => {
      return item.name.toLowerCase().includes(queryValue.toLowerCase());
    });
    setFilteredItems(filteredItems);
  };

  return (
    <div>
      <input
        type="search" 
        value={query}
        onChange={handleSearch}
        placeholder="Buscar items"
      />
      {filteredItems.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </div>
  );
};

export default SearchBar;