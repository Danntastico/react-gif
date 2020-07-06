import React, { useState } from 'react';
import { AddCategory } from './components/addCategory';
import { GifCollection } from './components/GifCollection';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['']);
  return (
    <>
      <h1>React Gif Application</h1>
      <AddCategory setCategory={setCategories} />
      <hr />
      <ul>
        {categories.map((i) => (
          <GifCollection key={i} category={i} />
        ))}
      </ul>
    </>
  );
};
