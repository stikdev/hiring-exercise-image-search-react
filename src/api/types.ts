// Note that this interface is not comprehensive; the unsplash API
// includes a ton of data which we don't really care about, so this interface
// is attempting to pare things down to only represent the data that will be most relevant
// to us
export interface UnsplashImage {
  id: string;
  width: number;
  height: number;
  // String describing what the image is
  description: string;
  // The user who originally uploaded the image
  user: {
    username: string;
    name: string;
  };
  // URLs for the image at varying quality levels
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

export interface UnsplashImageSearchResponse {
  total: number;
  total_pages: number;
  results: Array<UnsplashImage>;
}

export interface UnsplashImageSearchResponsePage
  extends UnsplashImageSearchResponse {
  pageNumber: number;
}
