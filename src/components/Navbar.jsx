import React, { useState, useEffect } from 'react';

function Navbar() {
  const [activeLink, setActiveLink] = useState('/');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
  className={`navbar navbar-expand-lg px-5 py-3 rounded border-bottom ${
    isScrolled ? 'border-0' : 'border-light'
  }`}
  style={{
    position: 'sticky',
    top: '0',
    zIndex: '1000',
    backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
    transition: 'background-color 0.3s ease',
  }}
>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample11"
          aria-controls="navbarsExample11"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <a
            className={`navbar-brand col-lg-3 me-0 fs-3 ${
              isScrolled ? 'text-white' : 'text-dark'
            }`}
            href="/"
          >
            Asif Nadaf
          </a>

          <ul className="navbar-nav col-lg-6 justify-content-lg-center gap-2">
            {[
              { href: '/', label: 'Home' },
              { href: '#skill', label: 'Skills' },
              { href: '#about', label: 'About Me' },
              { href: '#project', label: 'Projects' },
              { href: '#contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <li className="nav-item" key={href}>
                <a
                  className={`nav-link fs-5 ${
                    isScrolled ? 'text-white' : 'text-dark'
                  } ${activeLink === href ? 'fw-bold' : ''}`}
                  href={href}
                  onClick={() => handleLinkClick(href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="d-lg-flex col-lg-3 justify-content-lg-end">
            <button
              className={`btn ${isScrolled ? 'btn-outline-light' : 'btn-outline-dark'}`}
              onClick={() =>
                (window.location.href =
                  'mailto:asifnadaf0702@gmail.com?subject=Hiring Inquiry&body=Hi Asif, I would like to discuss an opportunity with you.')
              }
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
