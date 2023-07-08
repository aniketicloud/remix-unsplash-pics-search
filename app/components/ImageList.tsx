import React from "react";
import type { Image } from "~/types";

interface ImageListProps {
  images?: Image[];
}

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  return <h1>{images && images.length}</h1>;
};

export default ImageList;
