import './ImageList.css';
import React from 'react';

import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  const imageCards = images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{imageCards}</div>;
};

export default ImageList;
