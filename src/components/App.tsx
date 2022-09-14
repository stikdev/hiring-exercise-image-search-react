import React from "react";

import { useSearchUnsplashImages } from "../api/unsplash";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import SearchHistory from "./SearchHistory";
import WombatIcon from "./WombatIcon";

import { useSearchHistory } from "../hooks/searchHistory";

import "./App.css";
import "./sharedStyles.css";

/**
 * This is the main App component which renders the page.
 */
export default function App() {
  const [activeImageSearchTerm, setActiveImageSearchTerm] = React.useState("");

  const { searchHistory, addSearchHistoryEntry } = useSearchHistory();

  const { data, isLoading, error } = useSearchUnsplashImages(
    activeImageSearchTerm
  );

  const submitSearch = (newSearchTerm: string) => {
    addSearchHistoryEntry(newSearchTerm);
    setActiveImageSearchTerm(newSearchTerm);
  };

  return (
    <div className="App">
      <header className="Heading">
        <WombatIcon className="WombatIcon" />
        <h1>Waymark Interview Challenge: The Search for Images!</h1>
      </header>
      <main className="AppGrid">
        <div>
          <SearchForm submitSearch={submitSearch} />
          <SearchResults
            unsplashSearchData={data}
            isLoading={isLoading}
            error={error as Error}
          />
        </div>
        <div>
          <SearchHistory searchHistory={searchHistory} />
        </div>
      </main>
    </div>
  );
}
