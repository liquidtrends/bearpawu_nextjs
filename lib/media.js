import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  if (media && media.data && media.data.attributes) {
    const { url } = media.data.attributes;
    const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
    return imageUrl;
  } else {
    // Handle the case where media.data or media.data.attributes is null
    return null; // or any appropriate fallback value or error handling
  }
}
