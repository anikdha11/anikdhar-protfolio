import React from 'react';
import { Button, Card} from 'react-bootstrap';

const SingleProject = ({ project }) => {
    const { name,img,description } = project;
    
    return (
        <div>
            <Card style={{ width: '18rem' }} className="mt-3">
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title className="fw-bold">{name}</Card.Title>
            <Card.Text>
          {description}
            </Card.Text>
            <Button variant="outline-dark">Details</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProject;