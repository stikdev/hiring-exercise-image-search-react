import React from "react";

export interface SearchHistoryEntry {
  id: string;
  searchTerm: string;
}

/**
 * Tracks a history of search terms that the user has submitted
 */
export function useSearchHistory() {
  const [searchHistory, setSearchHistory] = React.useState<
    SearchHistoryEntry[]
  >(() => []);

  const addSearchHistoryEntry = React.useCallback((newSearchTerm: string) => {
    const newSearchHistoryEntry: SearchHistoryEntry = {
      // Generate an array of 8 random numbers and join them into a string
      // to approximate generating a random unique id
      id: crypto.getRandomValues(new Uint8Array(8)).join(""),
      searchTerm: newSearchTerm
    };

    setSearchHistory((currentSearchHistory) => [
      newSearchHistoryEntry,
      ...currentSearchHistory
    ]);
  }, []);

  return {
    searchHistory,
    addSearchHistoryEntry
  };
}
