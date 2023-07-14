import React from "react";
import type { Image } from "~/types";

interface ImageShowProps {
  image: Image;
}

const ImageShow: React.FC<ImageShowProps> = ({ image }) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageShow;
