import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import watchstore from "../../img/Watches Store.jpg"
import healthcare from "../../img/Healthcare.jpg"
import tourtravles from "../../img/tour travles.jpg"
import teachinghome from "../../img/teachinghome.jpg"
import developercommittee from "../../img/Developercommittee.jpg"
import "./Projects.css"

const Projects = () => {
    return (
        <div id="projects" className="mb-5">
            <h1 className="border-bottom border-warning border-4 w-25 mx-auto pb-2">Recents Projects</h1>
            <Container className="mt-5 ">
                <Row className="mx-auto">
                    <Col md={4} sm={8}>
                        <Card style={{ height: 230 }} className="text-dark mb-4">
                            <Card.Img className="my-auto img" src={watchstore} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className="fw-bold">Watches Store</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <ol>Use firebase Authentication system</ol>
                                        <ol>I make here Admin system</ol>
                                        <ol>Use MongoDB & Node js</ol>
                                        <ol>That's a responsive site..</ol>
                                    </ul>
                                </Card.Text>
                                <Card.Text>
                                    <Button id="btn-hover" variant="outline-dark">Details</Button>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={4} sm={8}>  <Card style={{ height: 230 }} className="text-dark mb-4">
                        <Card.Img className="my-auto img" src={healthcare} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title className="fw-bold">Online HealthCare</Card.Title>
                            <Card.Text>
                                <ul>
                                    <ol>Use Firebase Authentication system</ol>
                                    <ol>Use private Router</ol>
                                    <ol>MongoDB Database</ol>
                                    <ol>That’s Responsive site..</ol>
                                </ul>
                            </Card.Text>
                            <Card.Text>
                                <Button id="btn-hover" variant="outline-dark">Details</Button>
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card></Col>
                    <Col md={4} sm={8}>
                        <Card style={{ height: 230 }}>
                            <Card.Img className="my-auto img" src={tourtravles} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title className="fw-bold">Tour Travels</Card.Title>
                                <Card.Text>
                                    <ul >
                                        <ol>That's Mern stack project with private system</ol>
                                        <ol> use some hover effects</ol>
                                        <ol> You can book here</ol>
                                        <ol> That's Responsive Site </ol>
                                    </ul>
                                </Card.Text>
                                <Card.Text>
                                    <Button id="btn-hover" variant="outline-dark">Details</Button>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card></Col>

                    <Col className="mt-5" md={6} sm={8}>  <Card style={{ height: 320 }}>
                        <Card.Img className="my-auto img" src={teachinghome} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title className="fw-bold">Onolne Teaching Home</Card.Title>
                            <Card.Text>
                                <ul>
                                    <ol>Use React js</ol>
                                    <ol>Use React Bootstrap</ol>
                                    <ol>React Router Dom</ol>
                                    <ol>Make here own API</ol>
                                </ul>
                            </Card.Text>
                            <Card.Text>
                                <Button id="btn-hover" variant="outline-dark">Details</Button>
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    </Col>
                    <Col className="mt-5" md={6} sm={8}>  <Card style={{ height: 320 }} >
                        <Card.Img className="my-auto img" src={developercommittee} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title className="fw-bold">Developer Committee</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Card.Text>
                                <Button id="btn-hover" variant="outline-dark">Details</Button>
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Projects;