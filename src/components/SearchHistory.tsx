import { SearchHistoryEntry } from "../hooks/searchHistory";

import "./SearchHistory.css";

interface SearchHistoryProps {
  searchHistory: SearchHistoryEntry[];
}

/**
 * Takes an array of SearchHistoryEntry objects and
 * displays them as a list of all search terms that the user has run so far.
 */
export default function SearchHistory({ searchHistory }: SearchHistoryProps) {
  const hasSearchHistory = searchHistory.length > 0;

  return (
    <div className="Section SearchHistorySection">
      <h3>Search history</h3>
      {!hasSearchHistory ? "No past searches" : null}
      <ul className="SearchHistoryList">
        {searchHistory.map(({ id, searchTerm }) => (
          <li key={id}>{searchTerm}</li>
        ))}
      </ul>
    </div>
  );
}
