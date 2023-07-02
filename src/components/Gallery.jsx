import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageFifth from "../img/5.jpg";
import ImageSixth from "../img/6.jpg";
import ImageSeventh from "../img/7.jpg";
import ImageEigth from "../img/8.jpg";
import ImageNineth from "../img/9.jpg";
import ImageTen from "../img/10.jpg";

export default function Gallery() {
  return (
    <div className="gallery d-flex align-items-center min-vh-100 bg-body-secondary p-5">
      <Container>
        <Row>
          <h3 className="text-center mb-5">Gallery</h3>
        </Row>
        <Row
          className="row-cols-lg-3 row-cols-md-2 row-cols-1 gy-4"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
        >
          <Col>
            <img
              src={ImageFifth}
              alt=""
              className="w-100 h-100 object-fit-cover"
            />
          </Col>
          <Col>
            <img
              src={ImageSixth}
              alt=""
              className="w-100 h-100 object-fit-cover"
            />
          </Col>
          <Col>
            <img
              src={ImageSeventh}
              alt=""
              className="w-100 h-100 object-fit-cover"
            />
          </Col>
          <Col>
            <img
              src={ImageEigth}
              alt=""
              className="w-100 h-100 object-fit-cover"
            />
          </Col>
          <Col>
            <img
              src={ImageNineth}
              alt=""
              className="w-100 h-100 object-fit-cover"
            />
          </Col>
          <Col>
            <img
              src={ImageTen}
              alt=""
              className="w-100 h-100 object-fit-cover"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
