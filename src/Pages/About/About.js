import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import artpic from "../../img/Anik-clickMk.jpg";
import "./About.css";
const About = () => {
  let history = useHistory();
  const backToHome = () => {
    history.push("/home");
  };
  return (
    <div style={{ paddingTop: "8rem" }} className="fw-bold">
      <Container>
        <Row>
          <Col md={6} sm={8}>
            <img
              style={{
                boxShadow: "4px 4px 5px 6px skyblue",
                objectFit: "cover",
              }}
              className="img-fluid border rounded-circle"
              width={"75%"}
              src={artpic}
              alt=""
            />
          </Col>
          <Col md={6} sm={8}>
            <h2 className="fw-bold">I'm a Junior Front-End Developer.</h2>
            <h4>Comfortable</h4>
            <p>
              Html5, Css, Bootstrap, Material UI, Tailwind, javascript, Es6,
              React js, React Router, Firebase.
            </p>
            <h4>Familiar</h4>
            <p>TypeScript, Nodejs Express,Js, MongoDB.</p>
            <h4>Deploy & Tools</h4>
            <p>Git Vs Code, Heroku, Netlify, Firebase, Github</p>
            <div className="d-flex justify-content-evenly mb-3">
              <a
                className=" p-3 border border-1 border-secondary"
                href="https://github.com/anikdha11"
              >
                <i class="fab fa-github linkedin"></i>
              </a>
              <a
                className=" p-3 border border-1 border-secondary"
                href="https://www.facebook.com/profile.php?id=100004299047919"
              >
                <i className="fab fa-facebook-f fb"></i>
              </a>
              <a
                className=" p-3 border border-1 border-secondary"
                href="https://www.linkedin.com/in/anik-dhar-b353b31a5"
              >
                <i className="fab fa-linkedin-in linkedin"></i>
              </a>
            </div>
            <div className="basicBox">
              <Button className="border-0 btn-effect">Back-Home</Button>
              <svg
                onClick={backToHome}
                width="130"
                height="65"
                viewBox="0 0 130 65"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0" y="0" fill="none" width="130" height="65" />
              </svg>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
