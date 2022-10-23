import React from "react";
import { Link } from "react-router-dom";

const TermsnCond = () => {
  return (
    <div>
      <h2>Read throgh our terms and conditions</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptas
        sint? Tempore, molestias distinctio libero, ducimus saepe ratione
        quisquam reprehenderit, natus velit dolor voluptatum reiciendis
        explicabo nisi similique voluptatem beatae!
      </p>
      <p>
        Go back to <Link to="/register">Registration</Link>{" "}
      </p>
    </div>
  );
};

export default TermsnCond;
