import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('service.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className="container" id="Services">
      <h1 className="text-primary text-center my-5">Our Service</h1>
      <div className="row g-4">
        {
          services.map(service => <Service
            key={service.id}
            service={service}
          ></Service>)
        }
      </div>
    </div>
  );
};

export default Services;