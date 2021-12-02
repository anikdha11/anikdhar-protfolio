import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';



const ProjectDetails = () => {
    const { detailsId } = useParams();
    const [projects, setProjects] = useState({});


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
            });
    }, [detailsId]);


    return (
        <div>
            <h1>Projects {detailsId}</h1>
    
            <Container>
                <Row className="p-5 mt-5 mb-5 mx-auto">
                    <Col md={6} sm={8}><img className="img-fluid" src={projects.img} alt="" /></Col>
                    <Col>
                    <h1>{projects.name}</h1>
                    <p>{projects.description}</p>
                <div className="d-flex justify-content-evenly">
                <Button variant="outline-dark"><a style={{textDecoration:"none",fontWeight:"900"}} href={projects.live}>Live-Site</a></Button>
                {projects.client && <Button variant="outline-dark"><a style={{textDecoration:"none",fontWeight:"900"}} href={projects.client}>Client-code</a></Button>}
            {projects.server && <Button variant="outline-dark"><a style={{textDecoration:"none",fontWeight:"900"}} href={projects.server}>Server-code</a></Button>}
                </div>
                   <br />
                   <span>Technologies:</span> 
                   <p>{projects.technologies}</p>
                
                    </Col>
                </Row>
             
            </Container>

        </div>
    );
};

export default ProjectDetails;