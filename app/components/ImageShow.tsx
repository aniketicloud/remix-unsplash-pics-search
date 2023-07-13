import React from "react";
import type { Image } from "~/types";

interface ImageShowProps {
  image: Image;
}

const ImageShow: React.FC<ImageShowProps> = ({ image }) => {
  return <p>{image.id}</p>;
};

export default ImageShow;
