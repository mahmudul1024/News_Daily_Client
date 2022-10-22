import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();

  const { title, details, image_url, category_id } = news;
  console.log(news);
  return (
    <div>
      <Card style={{}}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="primary">Go to News Category</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
