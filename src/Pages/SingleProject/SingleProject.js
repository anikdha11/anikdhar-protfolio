import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProject = ({ project }) => {
    const { name,img,description,id } = project;
    const url = `/projects/${id}`
    return (
        <div>
            <Card style={{ width: '18rem' }} className="mt-3">
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title className="fw-bold">{name}</Card.Title>
            <Card.Text>
          {description}
            </Card.Text>
            <Link to={url}>
            <Button variant="outline-dark">Details</Button>
            </Link>
            </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProject;