import axios from "axios";
import type { Image } from "~/types";

export const searchImages = async (searchTerm: string): Promise<Image[]> => {
  const results = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID JoDf_SrKGzyaMG6ljqTIgubhFppAYzErp-t5pqEZQ6w",
    },
    params: {
      query: searchTerm,
    },
  });
  return results.data.results;
};
