import type { V2_MetaFunction } from "@remix-run/node";
import SearchBar from "~/components/SearchBar";
import ImageList from "~/components/ImageList";
import { searchImages } from "~/utils/search";
import { useState } from "react";
import type { Image } from "~/types";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Unsplash Image Search" },
    {
      name: "Search images from Unsplash",
      content: "Search images from Unsplash",
    },
  ];
};

export default function Index() {
  const [images, setImages] = useState<undefined | Image[]>();
  const handleSubmit = async (term: string) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8", margin: "1rem"}}>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
