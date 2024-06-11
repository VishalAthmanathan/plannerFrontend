import React, { useState } from 'react';
import home from "./assets/spiderlogo.jpg"
import logo from "./assets/nexusLogo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const images = [
    {
      src: home,
      title: "Image 1",
      text: "Descripton of 1."
    },
    {
      src: logo,
      title: "Image 2",
      text: "Descripton of 2."
    },
    {
        src: home,
        title: "Image 3",
        text: "Descripton of 3."
      },
      {
        src: logo,
        title: "Image 4",
        text: "Descripton of 4."
      },
      {
        src: home,
        title: "Image 5",
        text: "Descripton of 5."
      },
      {
        src: logo,
        title: "Image 6",
        text: "Descripton of 6."
      },
  ];

const CarouselCards = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToPrevSlide = () => {
        const index = activeIndex === 0 ? Math.ceil(images.length / 3) - 1 : activeIndex - 1;
        setActiveIndex(index);
    };

    const goToNextSlide = () => {
        const index = activeIndex === Math.ceil(images.length / 3) - 1 ? 0 : activeIndex + 1;
        setActiveIndex(index);
    };

    const groupedImages = [];
    for (let i = 0; i < images.length; i += 3) {
        groupedImages.push(images.slice(i, i + 3));
    }

    return (
        <section className="pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h3 className="mb-3">Premium Houses</h3>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary mb-3 mr-1" onClick={goToPrevSlide}>
                            <i className="fa fa-arrow-left"></i>
                        </button>
                        <button className="btn btn-primary mb-3" onClick={goToNextSlide}>
                            <i className="fa fa-arrow-right"></i>
                        </button>
                    </div>
                    <div className="col-12">
                        <div className="carousel slide">
                            <div className="carousel-inner">
                                {groupedImages.map((group, index) => (
                                    <div className={`carousel-item ${index === activeIndex ? 'active' : ''}`} key={index}>
                                        <div className="row">
                                            {group.map((item, idx) => (
                                                <div className="col-md-4 mb-3" key={idx}>
                                                    <div className="card">
                                                        <img className="img-fluid" alt="100%x280" src={item.src} />
                                                        <div className="card-body">
                                                            <h4 className="card-title">{item.title}</h4>
                                                            <p className="card-text">{item.text}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarouselCards;


