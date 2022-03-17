import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import artpic from "../../img/art pic.png"
import "./About.css"
const About = () => {
    let history = useHistory()
    const backToHome = () => {
        history.push('/home')
    }
    return (
        <div className="p-5 fw-bold">
            <Container>
                <Row>
                    <Col md={6} sm={8}>
                        <img className="img-fluid" src={artpic} alt="" />
                       

                    </Col>
                    <Col md={6} sm={8}>
                    <h2 className="fw-bold">I'm a Junior Front-End Developer.</h2>
                        <h4>Comfortable</h4>
                        <p>
                            Html5,
                            Css,
                            Bootstrap,
                            Material UI,
                            Tailwind,
                            javascript,
                            Es6,
                            React js,
                            React Router,
                            Firebase.</p>
                        <h4>Familiar</h4>
                        <p>
                            TypeScript,
                            Nodejs
                            Express,Js,
                            MongoDB.</p>
                        <h4>Deploy & Tools</h4>
                        <p>Git
                            Vs Code,
                            Heroku,
                            Netlify,
                            Firebase,
                            Github</p>
                        <div className="d-flex justify-content-evenly mb-3">
                        <a className=" p-3 shadow link" href="https://github.com/anikdha11"><i class="fab fa-github"></i></a>
                        <a className=" p-3 shadow link" href="https://www.facebook.com/profile.php?id=100004299047919"><i className="fab fa-facebook-f"></i></a>
                        <a className=" p-3 shadow link" href="https://www.linkedin.com/in/anik-dhar-b353b31a5"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <Button className="shadow border-1 border-success bg-light text-danger fw-bold mt-5 link" onClick={backToHome}>Back To Home</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;