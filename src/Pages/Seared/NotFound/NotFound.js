import React from 'react';
import Lazy from '../../../images/lazy.png'
const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 mt-5 py-4">
          <h1 className="py-3 text-danger fw-bold display-5"> 404 Page Are Not Found</h1>
          <p className="text-muted fs-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit architecto quisquam autem, eaque similique consectetur fugit possimus minus quod error.</p>
          <button className="btn btn-outline-warning px-5 mt-2">Back To Home</button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img src={Lazy} alt="" className="w-75 mt-5" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;