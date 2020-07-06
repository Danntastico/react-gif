import { useState, useEffect } from 'react';
import { getGif } from '../helpers/getGifs';

export const useGifFetcher = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGif(category).then((img) => {
      console.log(typeof img);
      setState({
        data: img,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
