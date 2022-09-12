import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import img from "../../img/Anik-clickMk.jpg";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <Container id="home" style={{ paddingTop: "50px" }}>
        <Row style={{ marginTop: "50px", marginBottom: 60 }}>
          <Col md={4} sm={8}>
            <img
              style={{
                boxShadow: "4px 4px 5px 6px skyblue",
                objectFit: "cover",
              }}
              className="w-75 border border-1 rounded-circle border-info img-effect"
              src={img}
              alt=""
            />
          </Col>
          <Col
            md={6}
            style={{ fontSize: "23px", fontWeight: 500 }}
            className="my-auto mt-3 fw-bold text-start"
          >
            {" "}
            <span className="text-success fw-bold">
              Hello, My Name is Anik Dhar,
            </span>
            i'm a Junior Front-End Developer, i love Programming and <br /> i
            create <span className="animated"> </span>
            <br />
            <a href="https://drive.google.com/u/2/uc?id=1VsLKNF6Km3TKr55uAc2peDcuqnGm6XFd&export=download">
              {" "}
              <Button className="mt-3 fw-bold" variant="outline-dark">
                Resume
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
};

export default Home;
