import React from 'react';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear()
  return (
    <div className="text-center p-2 my-5">
      <h3 className="text-primary">Copyright @ {year}</h3>
      <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptatibus reprehenderit! Qui reprehenderit atque veritatis minus, officiis omnis? Suscipit, sed?</p>
    </div>
  );
};

export default Footer;