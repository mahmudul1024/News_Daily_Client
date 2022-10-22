import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../Shared/NewsCard/NewsCard";

const Home = () => {
  const allnews = useLoaderData();
  console.log(allnews);
  return (
    <div>
      <h2 className="text-center">This is Home {allnews.length}</h2>
      {allnews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Home;
