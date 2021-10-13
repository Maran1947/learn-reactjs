import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";   

function Slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1200}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/user/erondu/800x300"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>This is first slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/800x300/?nature,mountain"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>This is second slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/800x300/?nature,river"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>This is third slide</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
