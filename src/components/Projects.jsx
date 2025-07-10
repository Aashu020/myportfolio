import React, { useState } from 'react';

// Import default images
import akaza from '../assets/akaza.png';
import yuta from '../assets/dabi.png';
import toji from '../assets/toji.png';
import kakashi from '../assets/kakshi.png';
import mikey from '../assets/mikey.png';
import eren from '../assets/eren.png';
import bloodman from '../assets/bloodman.png';
import itachi from '../assets/itachi1.png';
import sukuna from '../assets/sukuna.png';
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

// Image arrays
const defaultImages = [
  akaza, yuta, toji, kakashi, mikey, eren, bloodman, itachi, sukuna, rengoku
];

const hoverImages = [
  ayurveda, mauli, atharva, bachatgat, gineius, moonstone,
  rainbow, devcheems, portfolio, aroundme
];

const projects = [
  { name: 'Ayurveda', url: 'https://schoolofayurveda.in/', stack: ['React.js', 'Node.Js', 'Javascript', 'HTML5', 'Tailwind CSS', 'FFMPEG', 'Node-Cron', 'MongoDB'] },
  { name: 'Mauli', url: 'https://maulibusiness.com/', stack: ['React.js', 'Node.Js', 'Javascript', 'HTML5', 'Tailwind CSS', 'Vercel', 'Render', 'MongoDB'] },
  { name: 'Atharvatech', url: 'https://atharvatechindia.com/', stack: ['React.js', 'Node.Js', 'Javascript', 'HTML5', 'Tailwind CSS', 'SEO', 'Hostinger', 'MongoDB'] },
  { name: 'Bachatgat', url: 'https://bachatfrontend.codifyinstitute.org/', stack: ['React.js', 'Node.Js', 'Javascript', 'HTML5', 'Tailwind CSS', 'Vercel', 'Node-cron', 'MongoDB'] },
  { name: 'Edspride Class', url: 'https://edspride.in/', stack: ['React.js', 'Node.Js', 'Javascript', 'HTML5', 'Tailwind CSS', 'Git', 'GitHub', 'MongoDB'] },
  { name: 'Moonstone', url: 'https://rajhansmoonstone.com/', stack: ['Javascript', 'HTML5', 'CSS', 'Bootstrap', 'Git', 'Vercel', 'GTM', 'Google Ads'] },
  { name: 'Rainbowland', url: 'https://rainbowland.vercel.app/', stack: ['Javascript', 'HTML5', 'CSS', 'Bootstrap', 'Git', 'AppScript', 'Google Sheet', 'SEO'] },
  { name: 'Devcheems', url: 'https://devcheems.vercel.app/', stack: ['React.js', 'Node.Js', 'Javascript', 'HTML5', 'Tailwind CSS', 'Netlify', 'App-Script'] },
  { name: 'Portfolio', url: 'https://myportfolio-self-eta-71.vercel.app/', stack: ['React.js', 'Node.Js', 'Javascript', 'HTML5', 'Bootstrap', 'Vercel', 'App-Script', 'Google Sheet'] },
  { name: 'Aroundmesale', url: 'https://aroundmesale.com/', stack: ['React.js', 'Node.Js', 'Express', 'Javascript', 'HTML5', 'CSS3', 'MongoDB', 'Hostinger'] }
];

const Projects = () => {
  const [displayCount, setDisplayCount] = useState(8);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = (url) => {
    window.location.href = url;
  };

  const handleViewMore = () => {
    setDisplayCount(projects.length);
  };

  return (
    <section className="py-5" id="project">
      <div className="container">
        <h2 className="text-center fw-bold mb-md-4">My Projects</h2>
        <div className="row g-4">
          {projects.slice(0, displayCount).map((project, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-4"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={() =>
                setHoveredIndex((prev) => (prev === index ? null : index))
              }
              style={{ cursor: 'pointer' }}
              onClick={() => handleClick(project.url)}
            >
              <div className="animated-border w-100" style={{ height: '430px' }}>
                <div className="inner position-relative d-flex flex-column align-items-center justify-content-end w-100 h-100 ">
                  <img
                    src={hoveredIndex === index ? hoverImages[index] : defaultImages[index]}
                    alt={project.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '14px',
                    }}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Found';
                    }}
                  />

                  {/* Tech Stack Overlay */}
                  {hoveredIndex === index && (
                    <div
                      className="position-absolute d-flex flex-wrap align-items-center gap-2 w-100"
                      style={{
                        bottom: '35px',
                        left: '0',
                        zIndex: 10,
                        padding: '15px 20px',
                        overflowY: 'auto',
                      }}
                    >
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="d-inline-block px-2 py-1 text-xs fw-medium text-gray rounded-pill"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            border: '1px solid rgba(0, 0, 0, 0.2)',
                            fontSize: window.innerWidth <= 576 ? '10px' : '12px',
                            whiteSpace: 'nowrap',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Project Name */}
                  <div
                    className="position-absolute text-center w-100 "
                    style={{
                      bottom: '0px',
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      color: 'white',
                      padding: '8px 0',
                      fontSize: '16px',
                      fontWeight: '500',
                      letterSpacing: '3px',
                      zIndex: 5,
                    }}
                  >
                    {project.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {displayCount < projects.length && (
          <div className="text-center mt-4">
            <button className="btn btn-secondary" onClick={handleViewMore}>
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
