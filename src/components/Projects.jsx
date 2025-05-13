import React, { useState } from 'react';

// Import default images
import akaza from '../assets/akaza.png';
import yuta from '../assets/dabi.jpg';
import toji from '../assets/toji.jpg';
import kakashi from '../assets/kakshi.jpg';
import mikey from '../assets/mikey.jpg';
import eren from '../assets/eren.jpg';
import bloodman from '../assets/bloodman.jpg';
import itachi from '../assets/itachi1.jpg';
import sukuna from '../assets/sukuna.jpg';
import rengoku from '../assets/rengoku.png';

// Import hover images
import ayurveda from '../assets/ayurveda.png';
import mauli from '../assets/mauli.png';
import atharva from '../assets/atharva.png';
import bachatgat from '../assets/bachatgat.png';
import gineius from '../assets/edspirde.png';
import moonstone from '../assets/moonstone.png';
import rainbow from '../assets/rainbow.png';
import devcheems from '../assets/devcheems.png';
import portfolio from '../assets/portfolio.png';
import aroundme from '../assets/aroundme.png';

// Image arrays using imported images
const defaultImages = [
  akaza,
  yuta,
  toji,
  kakashi,
  mikey,
  eren,
  bloodman,
  itachi,
  sukuna,
  rengoku
];

const hoverImages = [
  ayurveda,
  mauli,
  atharva,
  bachatgat,
  gineius,
  moonstone,
  rainbow,
  devcheems,
  portfolio,
  aroundme
];

// Project labels and website URLs
const projects = [
  { name: 'Ayurveda', url: 'https://schoolofayurveda.in/' },
  { name: 'Mauli', url: 'https://maulibusiness.com/' },
  { name: 'Atharvatech', url: 'https://atharvatechindia.com/' },
  { name: 'Bachatgat', url: 'https://bachatgat.example.com' },
  { name: 'Edspride Class', url: 'https://edspride.in/' },
  { name: 'Moonstone', url: 'https://rajhansmoonstone.com/' },
  { name: 'Rainbowland', url: 'https://rainbowland.vercel.app/' },
  { name: 'Devcheems', url: 'https://devcheems.vercel.app/' },
  { name: 'Portfolio', url: 'https://myportfolio-self-eta-71.vercel.app/' },
  { name: 'Aroundmesale', url: 'https://aroundmesale.com/' }
];

const Projects = () => {
  const [displayCount, setDisplayCount] = useState(8);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Handle click to redirect to project website
  const handleClick = (url) => {
    window.location.href = url;
  };

  // Load all projects
  const handleViewMore = () => {
    setDisplayCount(projects.length);
  };

  return (
    <section className="py-5 " id='project'>
      <div className="container">
        <h2 className="text-center fw-bold mb-4">My Projects</h2>
        <div className="row g-4">
          {projects.slice(0, displayCount).map((project, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-4"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleClick(project.url)}
              style={{ cursor: 'pointer' }}
            >
              <div className="position-relative d-flex justify-content-center align-items-center">
                <img
                  src={hoveredIndex === index ? hoverImages[index] : defaultImages[index]}
                  alt={project.name}
                  className=""
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'contain',
                  }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Found';
                  }}
                />
                <div
                  className="position-absolute text-center w-100"
                  style={{
                    bottom: '0px',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    color: 'white',
                    padding: '5px 0',
                    fontSize: '16px',
                    fontWeight: '500',
                    letterSpacing:"3px"
                  }}
                >
                  {project.name}
                </div>
              </div>
            </div>
          ))}
        </div>
        {displayCount < projects.length && (
          <div className="text-center mt-4">
            <button
              className="btn btn-secondary"
              onClick={handleViewMore}
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;