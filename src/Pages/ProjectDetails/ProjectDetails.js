import React, { useEffect, useState } from 'react';
import { Button, Col, Container,Row, Spinner } from 'react-bootstrap';

import { useHistory, useParams } from 'react-router';



const ProjectDetails = () => {
    const { detailsId } = useParams();
    const [projects, setProjects] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    let history = useHistory()
    const backToHome = () => {
        history.push('/home')
    }

    useEffect(() => {
        fetch(
            "https://my-json-server.typicode.com/anikdha11/api-all/projects"
        )
            .then((res) => res.json())
            .then((data) => {
                const findData = data.find((project) => project.id == parseInt(detailsId));
                if (findData) {
                    setProjects(findData);
                 
                }
                setIsLoading(false)
            });
    }, [detailsId]);


    return (
        <div>
            <h1 className="fw-bold">Projects {detailsId}</h1>
            {
                isLoading &&   <Spinner animation="border" variant="danger" />
            }

            <Container>
                <Row className="p-3 mt-3 mb-5 mx-auto">
                    <Col md={6} sm={8}><img className="img-fluid" src={projects.img} alt="" /></Col>
                    <Col>
                        <h1>{projects.name}</h1>
                        <p>{projects.description}</p>
                        <div className="d-flex justify-content-evenly">
                            <Button className="shadow border-1 bg-light border-dark"><a style={{ textDecoration: "none", fontWeight: "900" }} href={projects.live}>Live-Site</a></Button>
                            {projects.client && <Button className="shadow border-1 bg-light border-dark"><a style={{ textDecoration: "none", fontWeight: "900" }} href={projects.client}>Client-code</a></Button>}
                            {projects.server && <Button className="shadow border-1 bg-light border-dark "><a style={{ textDecoration: "none", fontWeight: "900" }} href={projects.server}>Server-code</a></Button>}
                        </div>
                        <h2 className="fw-bold mt-3">Technologies:</h2>
                        <h5>{projects.technologies}</h5>
                        <Button className="shadow border-1 border-success bg-light text-danger fw-bold" onClick={backToHome}>Back To Home</Button>
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default ProjectDetails;