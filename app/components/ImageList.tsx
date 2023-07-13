import React from "react";
import type { Image } from "~/types";
import ImageShow from "./ImageShow";

interface ImageListProps {
  images?: Image[];
}

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  const renderedImages = images?.map((image) => (
    <ImageShow image={image} key={image.id} />
  ));
  return <>{images && renderedImages}</>;
};

export default ImageList;
