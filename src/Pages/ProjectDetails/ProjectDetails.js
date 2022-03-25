import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';

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
            `https://my-json-server.typicode.com/anikdha11/api-all/projects/${detailsId}`
        )
            .then((res) => res.json())
            .then((data) => {
                setProjects(data)
                console.log(data)
                // {
                //     const findData = data.find((project) => project.id == parseInt(detailsId));
                //     if (findData) {
                //         setProjects(findData);

                //     }
                setIsLoading(false)
            });
    }, [detailsId]);


    return (
        <div>
            <span style={{fontSize:'2.5rem'}} className="fw-bold p-2">Projects {detailsId}</span>
            {
                isLoading && <Spinner animation="border" variant="danger" />
            }

            <Container>
                <Row className="p-3 mt-3 mb-5 mx-auto">
                    <Col md={6} sm={8}><img className="img-fluid" src={projects.img} alt="" /></Col>
                    <Col>
                        <h1>{projects.name}</h1>
                        <p>{projects.description}</p>
                        <div className="d-flex justify-content-evenly">
                            <div className='basicBox'>
                                <a className='btn-effect' style={{ textDecoration: "none"}} href={projects.live}>Live-Site
                                <svg width="130" height="65" viewBox="0 0 130 65" xmlns="http://www.w3.org/2000/svg">
                                    <rect x='0' y='0' fill='none' width='130' height='65' />
                                </svg>
                                </a>
                            </div>
                            {projects.client &&
                                <div className='basicBox'>
                                   <a className='btn-effect' style={{ textDecoration: "none"}} href={projects.client}>Client
                                    <svg width="130" height="65" viewBox="0 0 130 65" xmlns="http://www.w3.org/2000/svg">
                                        <rect x='0' y='0' fill='none' width='130' height='65' />
                                    </svg>
                                    </a>
                                </div>
                            }
                            {projects.server && <div className='basicBox'>
                               <a className='btn-effect' style={{ textDecoration: "none"}} href={projects.server}>Server
                                <svg width="130" height="65" viewBox="0 0 130 65" xmlns="http://www.w3.org/2000/svg">
                                    <rect x='0' y='0' fill='none' width='130' height='65' />
                                </svg>
                                </a>
                            </div>}
                        </div>
                        <h2 className="fw-bold mt-3">Technologies:</h2>
                        <h5>{projects.technologies}</h5>
                        <div className='basicBox'>
                            <Button className="border-0 btn-effect">Back-Home</Button>
                            <svg onClick={backToHome} width="130" height="65" viewBox="0 0 130 65" xmlns="http://www.w3.org/2000/svg">
                                <rect x='0' y='0' fill='none' width='130' height='65' />
                            </svg>
                        </div>
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default ProjectDetails;