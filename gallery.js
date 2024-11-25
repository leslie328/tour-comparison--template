import React, { createContext, useState, useContext } from 'react';
const gallery = creategallery();
export const usegallery= () =>
{ return useContext(gallery);

}
const addItem = (newItem) => {
    setGalleryItems((prevItems) => [...prevItems, newItem]);
  };


