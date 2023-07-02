import React, { useEffect, useState } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import axios from "axios";

export default function ListMember() {
  const [user, setUser] = useState([]);
  // document.querySelector("body").setAttribute("data-bs-theme", "dark");

  useEffect(() => {
    const getUser = async () => {
      const users = await axios.get("https://dummyjson.com/user");
      setUser(users.data.users);
    };
    getUser();
  }, []);

  return (
    <>
      <Container className="pb-5">
        <Row xs={1} md={4} className="g-4 mt-4">
          {user.map((el, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img src={el.image} />
                <Card.Body>
                  <Card.Title className="text-center">{`${el.firstName} ${el.lastName}`}</Card.Title>
                  {/* <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
