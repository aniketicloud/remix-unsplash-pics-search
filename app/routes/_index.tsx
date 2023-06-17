import type { V2_MetaFunction } from "@remix-run/node";
import SearchBar from "~/components/SearchBar";
import ImageList from "~/components/ImageList";
import axios from "axios";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Unsplash Image Search" },
    {
      name: "Search images from Unsplash",
      content: "Search images from Unsplash",
    },
  ];
};

const searchImages = async () => {
  const results = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID JoDf_SrKGzyaMG6ljqTIgubhFppAYzErp-t5pqEZQ6w",
    },
    params: {
      query: "car",
    },
  });
  console.log(results);
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <SearchBar />
      <ImageList />
      <button onClick={searchImages}>Search</button>
    </div>
  );
}
