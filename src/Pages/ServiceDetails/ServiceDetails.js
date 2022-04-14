import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const {id} = useParams()
  return (
    <div>
      <h1>This is service details {id}</h1>
      <div className="text-center">
       <Link to='/checkout'>
       <button className="btn btn-primary">Process Checkout</button>
       </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;