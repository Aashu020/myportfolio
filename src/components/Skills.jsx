import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Character images
import img1 from '../assets/ayanakoji.png';
import img2 from '../assets/ichi-removebg-preview.png';
import img3 from '../assets/gojo.png';
import img4 from '../assets/levi.png';
import img5 from '../assets/killua.png';
import img6 from '../assets/lucifer.png';
import img7 from '../assets/blindfolded.png';
import img8 from '../assets/levi1.png';
import img9 from '../assets/nanami.png';
import img10 from '../assets/grimjjow.png';

// Skill logos
import react from '../assets/react.png';
import javascript from '../assets/javascript.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import tailwind from '../assets/tailwind.png';
import bootstrap from '../assets/bootstrap.png';
import node from '../assets/node.png';
import express from '../assets/javascript.png'; // Replace with real express logo if available
import mongo from '../assets/mongodb.png';
import python from '../assets/python.png';

const originalImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
const skillImages = [react, javascript, html, css, tailwind, bootstrap, node, express, mongo, python];
const labels = ['React.Js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Node.js', 'Express', 'MongoDB', 'Python'];
const proficiencyLevels = [95, 85, 95, 95, 90, 80, 85, 80, 90, 80];

const SkillCarousel = () => {
  const [slidesPerView, setSlidesPerView] = useState(6);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 576) setSlidesPerView(1);
      else if (width < 768) setSlidesPerView(2);
      else if (width < 992) setSlidesPerView(3);
      else if (width < 1200) setSlidesPerView(4);
      else setSlidesPerView(6);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-5" id="skill">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">My Skills</h2>
        <div className="row">
          <div className="col-12">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={slidesPerView}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={2000}
              className="mySwiper"
            >
              {originalImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="position-relative d-flex justify-content-center align-items-center h-100"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onTouchStart={() =>
                      setHoveredIndex(prev => (prev === index ? null : index))
                    }
                    style={{ touchAction: 'manipulation' }} // Helps prevent double tap zoom
                  >
                    <img
                      src={src}
                      alt={labels[index]}
                      className="img-fluid rounded-3 shadow-sm"
                      loading="lazy"
                      style={{
                        width: '250px',
                        height: '250px',
                        objectFit: 'cover',
                      }}
                    />

                    {/* Label */}
                    <div
                      className="position-absolute text-center w-100"
                      style={{
                        bottom: '0px',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        color: 'white',
                        padding: '5px 0',
                        fontSize: '16px',
                        fontWeight: '600',
                        letterSpacing: '3px',
                      }}
                    >
                      {labels[index]}
                    </div>

                    {/* Hover/Touch Overlay */}
                    <div className="position-absolute d-flex flex-column justify-content-center align-items-center w-100 h-100 overflow-hidden">
                      <div
                        className="position-absolute w-100 h-100 rounded-3 d-flex flex-column justify-content-center align-items-center"
                        style={{
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          zIndex: 1,
                          transform:
                            hoveredIndex === index
                              ? 'translateY(0)'
                              : 'translateY(100%)',
                          transition: 'transform 0.4s ease-in-out',
                        }}
                      >
                        <img
                          src={skillImages[index]}
                          alt={`${labels[index]} logo`}
                          className="img-fluid mb-auto"
                          loading="lazy"
                          style={{
                            width: '100px',
                            height: '100px',
                            objectFit: 'contain',
                            marginTop: '30px',
                          }}
                        />

                        <div className="mt-auto mb-4 d-flex flex-column align-items-center w-100">
                          <span
                            className="fw-bold text-white"
                            style={{ fontSize: '36px' }}
                          >
                            {proficiencyLevels[index]}%
                          </span>

                          <div
                            className="mt-2 rounded-full w-3/4"
                            style={{
                              height: '12px',
                              backgroundColor: 'rgba(255, 255, 255, 0.3)',
                              width: '75%',
                            }}
                          >
                            <div
                              className="h-full rounded-full"
                              style={{
                                width:
                                  hoveredIndex === index
                                    ? `${proficiencyLevels[index]}%`
                                    : '0%',
                                transition: 'width 0.6s ease-in-out 0.1s',
                                backgroundColor: '#61dafb',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCarousel;
