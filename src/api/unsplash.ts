import { useQuery } from "react-query";

import {
  UnsplashImageSearchResponse,
  UnsplashImageSearchResponsePage
} from "./types";

let unsplashAPIKey = "";
const unsplashAPIRoot = "https://api.unsplash.com";

/**
 * Constructs a formatted Unsplash API URL string which we can fetch
 *
 * @param {string} path - The pathname for the API endpoint we want to hit
 * @param {string} queryParams - Query param string to append to the URL (please include the leading "?")
 */
const getUnsplashApiURL = (path: string, queryParams: string) => {
  // Merge any query params for the API request with the Unsplash API key
  const combinedSearchParams = new URLSearchParams(queryParams);
  combinedSearchParams.append("client_id", unsplashAPIKey);

  return new URL(`${path}?${combinedSearchParams.toString()}`, unsplashAPIRoot)
    .href;
};

const MAX_IMAGES_PER_PAGE = 10;

/**
 * Fetches a page of unsplash images for a given search term and page number
 *
 * See this reference for the photo search API endpoint: https://unsplash.com/documentation#search-photos
 *
 * @param {string} searchTerm
 * @param {number} pageNumber
 */
const searchUnsplashImages = async (
  searchTerm: string,
  pageNumber: number = 1
): Promise<UnsplashImageSearchResponsePage> => {
  // Fetch API key at runtime and cache it
  if (!unsplashAPIKey) {
    unsplashAPIKey = (
      await (
        await fetch(
          "https://tsxjcd0aje.execute-api.us-east-2.amazonaws.com/api/"
        )
      ).json()
    ).apiKey;
  }

  const requestURL = getUnsplashApiURL(
    "/search/photos",
    `?query=${searchTerm}&page=${pageNumber}&per_page=${MAX_IMAGES_PER_PAGE}`
  );

  const response = await fetch(requestURL);
  const responseJSON: UnsplashImageSearchResponse = await response.json();

  return {
    pageNumber,
    ...responseJSON
  };
};

/**
 * Hook uses react-query's useQuery hook to fetch unsplash images
 * for a given search term.]
 *
 * Once our lovely potential Wombat is done, this hook will support pagination!
 * Here's a hint to nudge you in the right direction: https://tanstack.com/query/v4/docs/guides/infinite-queries
 *
 * @param {string} searchTerm - The search term to use in our query
 */
export const useSearchUnsplashImages = (searchTerm: string) =>
  useQuery(
    ["searchUnsplashImages", searchTerm],
    () => searchUnsplashImages(searchTerm),
    {
      // Disable the query if the search term is empty
      enabled: Boolean(searchTerm)
    }
  );
