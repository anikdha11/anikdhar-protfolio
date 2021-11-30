import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <div className="text-start fw-bold">
                            <p>
                                <i className="fas fa-location-arrow me-2"></i>
                                <span>  Address:
                                    Narsingdi,Dhaka,Bangladesh</span>
                            </p>
                            <p>
                                <i className="far fa-envelope me-2"></i>
                              <span>  Email:
                                aniksutradhar11@gmail.com</span>
                            </p>
                            <p>
                                <i className="fas fa-phone-volume me-2"></i>
                               <span> Call:
                                01992444398</span>
                            </p>
                        </div>
                    </Col>

                    <Col className="d-flex justify-content-around">
                        <a href="https://www.facebook.com/profile.php?id=100004299047919"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.linkedin.com/in/anik-dhar-b353b31a5"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#twitter"><i className="fab fa-twitter"></i></a>
                        <a href="#instragram"><i className="fab fa-instagram"></i></a>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Footer;