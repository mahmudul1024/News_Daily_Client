import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Brand1 from "../../../../Assets/Brands/jaguar.png";
import Brand2 from "../../../../Assets/Brands/Logo_brand_Adidas.png";
import Brand3 from "../../../../Assets/Brands/nike.png";

const BrandCarousal = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={Brand1}
          alt="First slide"
          height={150}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand2}
          alt="Second slide"
          height={150}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand3}
          alt="Third slide"
          height={150}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default BrandCarousal;
