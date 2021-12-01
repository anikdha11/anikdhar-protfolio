import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';



const ProjectDetails = () => {
    const { detailsId } = useParams();
    const [projects, setProjects] = useState({});


    useEffect(() => {
        fetch(
           "https://anikdha11.github.io/api/db.json"
        )
            .then((res) => res.json())
            .then((data) => {
                const findData = data.find((project) => project.id == parseInt(detailsId));
                if (findData) {
                    console.log(findData)
                    setProjects(findData);
                }
            });
    }, []);


    return (
        <div>
            <h1>Projects {detailsId}</h1>
    
            <Container>
                <Row className="p-5 mt-5 mb-5">
                    <Col md={6} sm={8}><img className="img-fluid" src={projects.img} alt="" /></Col>
                    <Col>
                    <h1>{projects.name}</h1>
                    <p>{projects.description}</p>
                    
                    </Col>
                </Row>
             
            </Container>

        </div>
    );
};

export default ProjectDetails;