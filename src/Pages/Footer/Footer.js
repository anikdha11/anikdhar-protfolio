import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='bg-dark'>
            <hr className=" bg-primary" />
            <Container className="mt-5">
            
                <Row>
                    <Col md={6} sm={8}>
                        <div className="text-start fw-bold ">
                            <p>
                                <i className="fas fa-location-arrow me-2 shadow p-2 contact-link"></i>
                                <span style={{textDecoration:'none',fontSize:'1rem',color:'white'}}>Narsingdi,Dhaka,Bangladesh</span>
                            </p>
                            <p>
                                <i className="far fa-envelope me-2 shadow p-2 contact-link"></i>
                              <span>
                              <a style={{textDecoration:'none',fontSize:'1.5rem'}} href="mailto:aniksutradhar11@gmail.com">Send E-mail</a>
                               </span>
                             
                            </p>
                            <p>
                                <i className="fas fa-phone-volume me-2 p-2 shadow contact-link"></i>
                               <span><a  style={{textDecoration:'none',fontSize:'1.5rem'}} href="tel:+01992444398"> Call Me</a></span>
                            </p>
                        </div>
                    </Col>
 
                    <Col md={6} sm={8}>
                        <div  className="d-flex justify-content-around mb-5 foot-link">
                        <a title='Facebook' className="p-3" href="https://www.facebook.com/profile.php?id=100004299047919"><i className="fab fa-facebook-f fb"></i></a>
                        <a title='Linkedin' className="p-3" href="https://www.linkedin.com/in/anik-dhar-b353b31a5"><i className="fab fa-linkedin-in linkedin"></i></a>
                        <a title='Twitter' className="p-3" href="#twitter"><i  className="fab fa-twitter twitter"></i></a>
                        <a title='Instagram' className="p-3" href="#instragram"><i  className="fab fa-instagram"></i></a>
                        </div>
                        
                        <h6 className="mt-3 fw-bold text-light">All Right Reserved &#169; 2021 Anik Dhar</h6>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;