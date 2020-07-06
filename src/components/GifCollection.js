import React from 'react';
import { useGifFetcher } from '../hooks/useGifFetcher';
import { GifItem } from './GifItem';
//uqsgF6cjuTOHpfkOxFClvA01Pes9eGbo
//api.giphy.com/v1/gifs/search

export const GifCollection = ({ category }) => {
  const { data: images, loading } = useGifFetcher(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading data...</p>}
      <div className='card-grid'>
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
