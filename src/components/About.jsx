import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "../assets/yuta.jpg"

const About = () => {
  return (
    <section className="py-5" id='about'>
      <div className="container">
        <div className="row align-items-center">
          
          {/* Image Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={img}
              alt="About"
              loading="lazy"
              style={{ width: "100%", height: "500px", objectFit: "contain" }}
            />
          </div>

          {/* Text Section */}
          <div className="col-md-6 px-4">
            <h2 className="mb-3 mb-md-4">About Me</h2>
            
            <p className="fs-6 fs-md-5 mb-2 mb-md-3" style={{ wordSpacing: "5px", letterSpacing: "1.5px" }}>
              I'm a Computer Science graduate (2024) with 6 months of real-world experience as a Fullstack Developer. During my internship, I built and deployed live web applications.
            </p>
            
            <p className="fs-6 fs-md-5 mb-0" style={{ wordSpacing: "5px", letterSpacing: "1.5px" }}>
              I'm passionate about clean code, performance, and building user-friendly apps that solve real problems. I’m actively looking for full-time roles where I can contribute, grow, and learn with a great team.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
