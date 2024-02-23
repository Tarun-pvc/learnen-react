import React, { useState } from "react";

import search from "../assets/search.png";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="sd-explore-search-wrapper">
      <input
        placeholder=""
        id="sd-explore-search-input"
        className="sd-explore-search-input"
        name="text"
        type="text"
      />
      <img className="sd-explore-search-icon" src={search} alt="search" />
    </div>
  );
}
