import React from "react";
import "../style/index.css";
import Carousel from "react-bootstrap/Carousel";
import ImageFirst from "../img/1.jpg";
import ImageSecond from "../img/2.jpg";
import ImageThird from "../img/3.jpg";

export default function Hero() {
  return (
    <Carousel>
      <Carousel.Item className="carousel-dark">
        <img
          className="d-block w-100 vh-100 object-fit-cover"
          src={ImageFirst}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        {/* </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className="carousel-dark">
        <img
          className="d-block w-100 vh-100 object-fit-cover"
          src={ImageSecond}
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className="carousel-dark">
        <img
          className="d-block w-100 vh-100 object-fit-cover"
          src={ImageThird}
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        {/* </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}
