import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <hr className=" bg-primary" />
            <Container className="mt-5">
            
                <Row>
                    <Col md={6} sm={8}>
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
 
                    <Col md={6} sm={8}>
                        <div  className="d-flex justify-content-around mb-5">
                        <a className="border rounded-circle p-3 shadow border-dark border-1" href="https://www.facebook.com/profile.php?id=100004299047919"><i className="fab fa-facebook-f"></i></a>
                        <a className="border rounded-circle p-3 shadow border-dark border-1" href="https://www.linkedin.com/in/anik-dhar-b353b31a5"><i className="fab fa-linkedin-in"></i></a>
                        <a className="border rounded-circle p-3 shadow border-dark border-1" href="#twitter"><i className="fab fa-twitter"></i></a>
                        <a className="border rounded-circle p-3 shadow border-dark border-1" href="#instragram"><i className="fab fa-instagram"></i></a>
                        </div>
                        
                        <h4 className="mt-3 fw-bold">All Right Reserved &#169; 2021 Anik Dhar</h4>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Footer;