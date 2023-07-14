import React from "react";
import type { Image } from "~/types";
import ImageShow from "./ImageShow";
import "./ImageList.css";

interface ImageListProps {
  images?: Image[];
}

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  const renderedImages = images?.map((image) => (
    <ImageShow image={image} key={image.id} />
  ));
  return <div className="image-list">{images && renderedImages}</div>;
};

export default ImageList;
