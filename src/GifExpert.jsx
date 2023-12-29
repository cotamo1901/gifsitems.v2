import { useState } from "react";
import { AddCategory,GifGrid } from "./components";
import Header from "./components/Header";


export const GifExpert = () => {
  const [categories, setCategories] = useState([" "]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* titulo */}
      <Header/>
      <h1>GifExpert</h1>
      {/* Input */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}

      {/* Gif Items */}
    </>
  );
};
