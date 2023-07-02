import React from "react";
import ImageForth from "../img/4.jpg";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

export default function welcome() {
  AOS.init();
  return (
    <div
      className="d-flex align-items-center min-vh-100 mb-5"
      data-aos="fade-right"
      data-aos-duration="3000"
    >
      <Container>
        <Row className="row-cols-md-2 row-cols-1">
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <h3 className="align-self-start">Kenapa harus join dengan kita?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              provident veritatis debitis repudiandae animi modi alias mollitia
              at voluptates quibusdam?
            </p>
          </Col>
          <Col>
            <img src={ImageForth} alt="" className="w-100" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
