import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const  Carrousel= ()=> {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} slide={false}>
      <Carousel.Item>
        <img
          className=" d-block " 
          style={{
            height:"650px",
            width:"100%"
            
          }}        
          src="../../img/img1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='pb-5'> 
            <p className='display-5'>ESTAR COMODO,</p>
            <p className='display-5'>NUNCA FUE TAN FACIL</p>
          </div>

        <Button variant="outline-light" size="lg" className='rounded-0'>SHOP</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="rounded mx-auto d-block " 
          style={{
            height:"650px",
            width:"100%"
            
          }}        
          src="../../img/img2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <p className='display-5'>ESTAR COMODO,</p>
        <p className='display-5'>NUNCA FUE TAN FACIL</p>
        <Button variant="outline-dark">SHOP</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="rounded mx-auto d-block " 
          style={{
            height:"650px",
            width:"100%"
            
          }}        
          src="../../img/img3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <p className='display-5'>ESTAR COMODO,</p>
        <p className='display-5'>NUNCA FUE TAN FACIL</p>
        <Button variant="outline-dark">SHOP</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel






