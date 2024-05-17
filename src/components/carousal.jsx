import "./component_CSS/carousal.css";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "./assets/spiderlogo.jpg"
import img2 from "./assets/spiderlogo.jpg"
import img3 from "./assets/spiderlogo.jpg"
import img4 from "./assets/spiderlogo.jpg"
import img5 from "./assets/spiderlogo.jpg"
import img10 from "./assets/spiderlogo.jpg"
import img12 from "./assets/spiderlogo.jpg"
import img13 from "./assets/spiderlogo.jpg"
import img14 from "./assets/spiderlogo.jpg"
import img15 from "./assets/spiderlogo.jpg"

const CarouselComponent = () => {
  return (
    <div className='carousel_container'>
    <Carousel className='carousel' interval={2000}>
    <Carousel.Item>
      <img
        className="d-block"
        src={img1}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img2}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img3}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img4}
        alt="Fourth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img5}
        alt="Fifth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img15}
        alt="Fifteenth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img10}
        alt="Tenth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img12}
        alt="Twelfth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img13}
        alt="Thirteenth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img14}
        alt="Fourteenth slide"
      />
    </Carousel.Item>
    
  </Carousel>
  </div>
  );
};

export default CarouselComponent;