import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import img from "../../img/profile-pic (2).png"

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row style={{marginTop:'50px'}}>
                    <Col md={4} sm={8}><img className="w-75" src={img} alt="" /></Col>
                    <Col style={{fontSize:'23px',fontWeight:500}} className="my-auto fw-bold" >Hello, My Name is Anik Dhar.I'm a student ,i'm a Junior Front-End Developer, i love Programming and i create a Fullstack Projects & Landing Pages. </Col>
                </Row>
              
            </Container>


        </div>
    );
};

export default Home;