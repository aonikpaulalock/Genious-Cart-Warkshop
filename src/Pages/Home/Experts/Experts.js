import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';
const experts = [
  {id:1 , name:'Jhon Smith',img:expert1,des:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa saepe quod corporis dolorem quo, facilis recusandae omnis a ipsam labore.'},
  {id:2 , name:'Jhon Clever',img:expert2,des:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa saepe quod corporis dolorem quo, facilis recusandae omnis a ipsam labore.'},
  {id:3 , name:'Jhon Flever',img:expert3,des:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa saepe quod corporis dolorem quo, facilis recusandae omnis a ipsam labore.'},
  {id:4 , name:'Jhon Alu',img:expert4, des:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa saepe quod corporis dolorem quo, facilis recusandae omnis a ipsam labore.'},
  {id:5 , name:'Jhon Valu',img:expert5, des:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa saepe quod corporis dolorem quo, facilis recusandae omnis a ipsam labore.'},
  {id:6 , name:'Jhon Calu',img:expert6,des:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa saepe quod corporis dolorem quo, facilis recusandae omnis a ipsam labore.'}
]
const Experts = () => {
  return (
    <div className="container" id="Experts">
    <h1 className="text-primary text-center my-5">Our Experts</h1>
    <div className="row g-4">
      {
        experts.map(expert => <Expert
          key={expert.id}
          expert={expert}
        ></Expert>)
      }
    </div>
  </div>
  );
};

export default Experts;