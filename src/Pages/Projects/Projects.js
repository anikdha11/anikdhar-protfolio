import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import watchstore from "../../img/Watches Store.jpg"
import healthcare from "../../img/Healthcare.jpg"
import tourtravles from "../../img/tour travles.jpg"
import teachinghome from "../../img/teachinghome.jpg"
import developercommittee from "../../img/Developercommittee.jpg"

const Projects = () => {
    return (
        <div className="mb-5">
            <h1 className="border-bottom border-warning border-4 w-25 mx-auto pb-2">Recents Projects</h1>
            <Container className="mt-5 ">
                <Row  className="mx-auto">
                    <Col md={4} sm={8}>
                        <Card style={{height:230}} className="text-dark">
                            <Card.Img className="my-auto" src={watchstore} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Watches Store</Card.Title>
                                <Card.Text>
                                <p></p>
                                </Card.Text>
                                <Card.Text></Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={4} sm={8}>  <Card style={{height:230}}  className="text-dark">
                        <Card.Img className="my-auto" src={healthcare} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Online HealthCare</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                    </Card></Col>
                    <Col md={4} sm={8}>  
                    <Card style={{height:230}}>
                        <Card.Img className="my-auto" src={tourtravles} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Tour Travels</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                    </Card></Col>
          
                <Col className="mt-5" md={6} sm={8}>  <Card style={{height:320}}>
                        <Card.Img className="my-auto" src={teachinghome} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Online Teaching Home</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    </Col>
                    <Col  className="mt-5" md={6} sm={8}>  <Card style={{height:320}} >
                        <Card.Img className="my-auto" src={developercommittee} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Developer Committee</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Card.Text>
                                <Button>Details</Button>
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