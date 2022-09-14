import { UnsplashImageSearchResponsePage } from "../api/types";
import "./SearchResults.css";

interface SearchResultsProps {
  unsplashSearchData?: UnsplashImageSearchResponsePage;
  isLoading: boolean;
  error: Error;
}

/**
 * Displays images fetched from Unsplash.
 */
export default function SearchResults({
  unsplashSearchData,
  isLoading,
  error
}: SearchResultsProps) {
  // TODO: update this to support pagination!
  const firstPageImages = unsplashSearchData?.results;
  const hasImages = (firstPageImages?.length ?? 0) > 0;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops. An error occurred: {error.message}</div>;
  }

  return (
    <div className="Section SearchResultsSection">
      {!hasImages ? (
        "No results"
      ) : (
        <ul className="SearchResultsList">
          {firstPageImages
            ? firstPageImages.map((unsplashImage) => (
                <li key={unsplashImage.id}>
                  <img src={unsplashImage.urls.regular} />
                </li>
              ))
            : null}
        </ul>
      )}
    </div>
  );
}
