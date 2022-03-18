import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../Header/Header.css"

const SingleProject = ({ project }) => {
    const { name, img, description, id } = project;
    const [active, setActive] = useState("green");
    const url = `/projects/${id}`
    return (
        <div>
            <style>{`
        .red {color: red}||{fontWeight:"900"}
        .green {color: green}
      `}</style>
            <Card  style={{ width: '18rem',backgroundColor:'transparent' }} className="img-effect">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className={active}
                        onClick={() => setActive((active) => (active === "red" ? "green" : "red"))}>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    {/* button css from header.css */}
                    <div className='basicBox'>
                        <Link to={url}>
                            <Button className="btn-effect">Details</Button>
                            <svg width="130" height="65" viewBox="0 0 130 65" xmlns="http://www.w3.org/2000/svg">
                                <rect x='0' y='0' fill='none' width='130' height='65' />
                            </svg>
                        </Link>

                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProject;