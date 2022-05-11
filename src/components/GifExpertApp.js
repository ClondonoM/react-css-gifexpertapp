import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["dog"]);

  return (
    <>
      <div className="title">
        <h1>Gif Expert App</h1>
        <a>https://www.carlos-londono.dev</a>
      </div>

      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
