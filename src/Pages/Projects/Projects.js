import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import watchstore from "../../img/Watches Store.jpg"
// import healthcare from "../../img/Healthcare.jpg"
// import tourtravles from "../../img/tour travles.jpg"
// import teachinghome from "../../img/teachinghome.jpg"
// import developercommittee from "../../img/Developercommittee.jpg"
import "./Projects.css"
import SingleProject from '../SingleProject/SingleProject';

const projects = [
    {
        "id": "1",
        "name": "Watches Store",
        "description": " This is full stack projects with mongodb database.... ",
        "img":"https://i.ibb.co/xfMcbYm/Watches-Store.jpg"
    },
    {
        "id": "2",
        "name": "Online HealthCare",
        "description": " This is full stack projects with mongodb database.... ",
        "img":"https://i.ibb.co/6Wv4gSj/Healthcare.jpg"
    },
     {
        "id": "3",
        "name": "Tour Travels",
        "description": " This is full stack projects with mongodb database.... ",
        "img":"https://i.ibb.co/FqP0CZx/tour-travles.jpg"
    }, 
    {
        "id": "4",
        "name": "Online Teaching Home",
        "description": " This is full stack projects with mongodb database.... ",
        "img":"https://i.ibb.co/w7m88j1/teachinghome.jpg"
    }, 
    {
        "id": "5",
        "name": "Developer Committee",
        "description": " This is full stack projects with mongodb database.... ",
        "img":"https://i.ibb.co/BfCKFdM/Developercommittee.jpg"
    }
]


const Projects = () => {
    return (
        <div id="projects" className="mb-5">
            <h1 className="border-bottom border-warning border-4 w-25 mx-auto pb-2">Recents Projects</h1>
            <Container className="mt-5 ">
                <Row className="mx-auto justify-content-md-center">
         
         

                    {
                        projects.map(project=>
                        <Col md={4} sx={12}>
                        <SingleProject
                        key={project.id}
                        project={project}></SingleProject></Col>)
                    }
           
                    {/* <Col md={4} sm={8}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={watchstore} />
                            <Card.Body>
                                <Card.Title className="fw-bold">Watches Store</Card.Title>
                                <Card.Text>
                                    This is full stack projects with mongodb database....
                                </Card.Text>
                                <Button variant="outline-dark">Details</Button>
                            </Card.Body>
                        </Card>



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
                    <Col md={4} sm={8}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={healthcare} />
                            <Card.Body>
                                <Card.Title className="fw-bold">Online HealthCare</Card.Title>
                                <Card.Text>
                                    This is online HealthCare Website with full responsive ...
                                </Card.Text>
                                <Button variant="outline-dark">Details</Button>
                            </Card.Body>
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

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={tourtravles} />
                            <Card.Body>
                                <Card.Title className="fw-bold">Tour Travels</Card.Title>
                                <Card.Text>
                                    This is full stack projects with mongodb database....
                                </Card.Text>
                                <Button variant="outline-dark">Details</Button>
                            </Card.Body>
                        </Card>


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
                        </Card>
                    </Col>

                    <Col className="mt-5" md={6} sm={8}>  <Card style={{ height: 320 }}>
                        <Card.Img className="my-auto img" src={teachinghome} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title className="fw-bold">Online Teaching Home</Card.Title>
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
                    </Col> */}

                </Row>
            </Container>
        </div>
    );
};

export default Projects;