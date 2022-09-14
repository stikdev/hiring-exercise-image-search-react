import React from "react";

import "./SearchForm.css";

interface SearchBarFormProps {
  submitSearch: (newSearchTerm: string) => void;
}

/**
 * Displays a form which can be used to type and submit a new search term
 * to fetch images for.
 */
export default function SearchBarForm({ submitSearch }: SearchBarFormProps) {
  const [searchInputValue, setSearchInputValue] = React.useState("");

  const onSubmit = () => {
    submitSearch(searchInputValue);
  };

  return (
    <div className="Section SearchFormSection">
      <label htmlFor="searchInput" className="SearchInputLabel">
        Search for images on Unsplash
      </label>
      <span className="SearchInputAndButtonRow">
        <input
          id="searchInput"
          className="TextInput"
          placeholder="Type your search term here!"
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.currentTarget.value)}
        />
        <button onClick={onSubmit} type="button" className="SubmitButton">
          Search
        </button>
      </span>
    </div>
  );
}
