import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
        "description": " This is landing page with react router dom.... ",
        "img":"https://i.ibb.co/w7m88j1/teachinghome.jpg"
    }, 
    {
        "id": "5",
        "name": "Developer Committee",
        "description": " This is Javascript projects with own API.... ",
        "img":"https://i.ibb.co/BfCKFdM/Developercommittee.jpg"
    }
]


const Projects = () => {
    
    return (
        <div id="projects" className="mb-5">
            <span className="p-2 text-center fw-bold btn-effect shadow text-success border border-secondary">Recents Projects</span>
            <Container className="mt-5 ">
                <Row className="p-3 mb-5 justify-content-md-center justify-content-center">
                    {
                        projects.map(project=>
                        <Col className=''lg={4} md={4} sm={12} xs={12}>
                        <SingleProject
                        key={project.id}
                        project={project}></SingleProject></Col>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Projects;