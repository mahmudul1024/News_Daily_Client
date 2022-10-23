import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftsideNav = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://news-daily-server.vercel.app/news-categories")
      .then((result) => result.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      <h4>All Category :{category.length}</h4>
      <div>
        {category.map((cat) => (
          <p key={cat.id}>
            <Link to={`/category/${cat.id}`}>{cat.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftsideNav;
