import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import EventOne from "../img/event-1.jpg";
import EventTwo from "../img/event-2.jpg";
import EventThree from "../img/event-3.jpg";
import EventFour from "../img/event-4.jpg";

export default function Event() {
  const ArrImg = [EventOne, EventTwo, EventThree, EventFour];
  return (
    <div className="d-flex align-items-center min-vh-100 p-5">
      <Container>
        <Row>
          <h3 className="text-center mb-5">Event</h3>
        </Row>
        <Row xs={1} md={2} lg={3} className="g-4">
          {ArrImg.map((e, i) => {
            return (
              <Col key={i}>
                <Card>
                  <Card.Img variant="top" src={e} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
