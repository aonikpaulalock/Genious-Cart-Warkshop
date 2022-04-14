import React from 'react';
import {Card } from 'react-bootstrap';

const Expert = ({ expert }) => {
  const { name, img, des } = expert;
  return (
    <div className="col-md-6 col-lg-4 col-sm-12">
      <Card className="shadow border-0 text-center"> 
        <Card.Img variant="top" src={img} className="w-100" />
        <Card.Body>
          <Card.Title className="fs-3 fw-bold text-primary">{name}</Card.Title>
          <Card.Text  className="text-muted">
            {des}
          </Card.Text>
         <button className="btn btn-outline-primary w-100">Details Expert</button>
          </Card.Body>
      </Card>
    </div>
  );
};

export default Expert;