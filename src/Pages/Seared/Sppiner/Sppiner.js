import React from 'react';
import { Spinner } from 'react-bootstrap';

const Sppiner = () => {
  return (
    <div style={{height: '400px'}} className="w-100 d-flex align-items-center justify-content-center">
      <Spinner animation="border" variant="primary" />
      <Spinner animation="grow" variant="success" />
    </div>
  );
};

export default Sppiner;