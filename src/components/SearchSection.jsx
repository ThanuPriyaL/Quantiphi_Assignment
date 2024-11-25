import React, { useState } from "react";
import debounce from "lodash.debounce";
import { ReactComponent as SearchIcon } from "../images/searchIcon.svg"; 
import { ReactComponent as ShareIcon } from "../images/optionShareIcon.svg";

const SearchSection = ({ destinations }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDestinations, setFilteredDestinations] = useState([]);

  // Debounced function to filter destinations
  const debouncedFilter = debounce((term) => {
    const filtered = destinations.filter((destination) =>
      destination.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredDestinations(filtered);
  }, 500);

  // Handle input change
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setFilteredDestinations([]); // Clear suggestions when input is empty
    } else {
      debouncedFilter(value);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (destination) => {
    setSearchTerm(destination.name); // Set selected value in the input
    setFilteredDestinations([]); // Hide suggestions
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <SearchIcon className="search-icon" />
        <input
          type="text"
          className="search-input"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for destinations..."
        />
      </div>

      <ul
        className={`suggestions-list ${
          filteredDestinations.length > 0 ? "show" : ""
        }`}
      >
        {filteredDestinations.map((destination) => (
          <li
            key={destination.id}
            className="suggestion-item"
            onClick={() => handleSuggestionClick(destination)}
          >
            <div className="suggestion-info">
              <p>{destination.name}, {destination.city}, {destination.country}</p>
            </div>
            <ShareIcon className="option-icon" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchSection;
