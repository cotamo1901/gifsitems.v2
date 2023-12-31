import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const {images,isloading}= useFetchGifs(category)
 

  return (
    <>
    <h3>{category}</h3>
    <div>

      {images.map((image) => (
      <GifItem  
      key={image.id}
      {...image}
    
      />

        
      ))}


    </div>
      
    </>
  );
};
