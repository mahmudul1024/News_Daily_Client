import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftsideNav = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((result) => result.json())
      .then((data) => setCategory(data));
  }, []);

  console.log(category);
  return (
    <div>
      <h4>All Category :{category.length}</h4>
      <div>
        {category.map((cat) => (
          <p key={cat.id}>
            <Link to={`/category/:id`}>{cat.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftsideNav;
