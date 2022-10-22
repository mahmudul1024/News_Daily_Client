import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../Pages/Shared/NewsCard/NewsCard";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <h3>This is Category component has news : {categoryNews.length}</h3>
      <div>
        {categoryNews.map((catnews) => (
          <NewsCard key={catnews._id} news={catnews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
