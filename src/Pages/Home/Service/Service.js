import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
  const navigate = useNavigate()
  const { id, img, price, description, name } = service;
  const handlenavigate = id => {
     navigate(`/service/${id}`)
  }
  return (
    <div className="col-md-6 col-lg-4 col-sm-12">
      <div className="border border-muted rounded p-2 shadow text-center">
        <img src={img} alt="" className="w-100" />
        <h4 className='text-primary my-2 fw-bold'>{name}</h4>
        <h5 className='text-warning'>Price : $ {price}</h5>
        <p className='text-muted'>{description}</p>
        <button className="btn btn-outline-primary w-100" onClick={() => handlenavigate(id)}>Book-Now</button>
      </div>
    </div>
  );
};

export default Service;