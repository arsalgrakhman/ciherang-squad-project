import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Nav,
  Navbar,
  Form,
  Alert,
  Container,
  CloseButton,
} from "react-bootstrap";
import { updateClick } from "../redux/sticky/action";

import { Link, useLocation } from "react-router-dom";

import Bicycle from "../img/bicycle.png";

const NavbarComp = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [themeColor, setThemeColor] = useState("light");
  const { click } = useSelector((state) => state.sticky);
  const dispatch = useDispatch();
  const updateThemeColor = () => {
    themeColor == "light" ? setThemeColor("dark") : setThemeColor("light");
  };
  const updateIsClick = () => {
    dispatch(updateClick(!click));
  };

  const changeBackgroundColor = () => {
    if (window.scrollY > 576) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundColor);
    document.querySelector("body").setAttribute("data-bs-theme", themeColor);
  });
  const location = useLocation();

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        fixed="top"
        className={
          changeColor || location.pathname == "/list-member"
            ? "color-active shadow bg-body-tertiary flex-column p-0 sticky-top"
            : ""
        }
      >
        <Alert
          key="primary"
          variant="primary"
          className={
            click
              ? "d-none"
              : "sticky-top vw-100 mb-0 d-none d-lg-flex justify-content-lg-center align-items-lg-center "
          }
        >
          <div className="w-50 d-flex justify-content-evenly align-items-center">
            Segera Download Aplikasi Kami!
            <Button variant="dark" href="https://play.google.com/">
              <i class="fa-brands fa-google-play"></i>Google Play
            </Button>
            <Button variant="dark" href="https://www.apple.com/id/app-store/">
              <i class="fa-brands fa-apple"></i>App Store
            </Button>
          </div>
          <CloseButton className="ms-auto" onClick={updateIsClick} />
        </Alert>
        <Container className="py-3">
          <Navbar.Brand className="fw-bold fs-4">
            <img src={Bicycle} className="bicycle" /> Ciherang Squad
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav className="fs-6">
                <Nav.Link>
                  <Link
                    to="/"
                    className={
                      location.pathname == "/"
                        ? "link-offset-2 link-underline-opacity-100"
                        : "link-offset-2 link-underline link-underline-opacity-0"
                    }
                  >
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/list-member"
                    className={
                      location.pathname == "/list-member"
                        ? "link-offset-2 link-underline-opacity-100"
                        : "link-offset-2 link-underline link-underline-opacity-0"
                    }
                  >
                    List Member
                  </Link>
                </Nav.Link>

                <Form className="d-flex justify-content-lg-center align-items-lg-center fs-5">
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    aria-label="option 1"
                    onClick={updateThemeColor}
                  />
                  <Form.Check.Label>
                    <i class="fa-solid fa-moon"></i>
                  </Form.Check.Label>
                </Form>
              </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
