// import avatar from "../assets/avatar.png"
import img from "../assets/geto1.jpg";
import { TypeAnimation } from 'react-type-animation';

function HeroSection() {
  return (
    <section className="pt-5 ">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-5 text-center mt-4 mt-md-0">
            <img
              src={img}
              alt="Hero Avatar"
              className="img-fluid"
              style={{ maxHeight: "calc(100vh - 115px)" }}
            />
          </div>

          {/* Right Image */}
          <div className="col-md-7">
            <h1
              className="fw-bold text-dark mb-4"
              style={{ wordSpacing: "10px" }}
            >
              Hi! I'm{" "}
              <TypeAnimation
                sequence={[
                  'Asif Nadaf.', 1000, // pause 1s after typing
                  '', 100             // delete and pause briefly
                ]} // 1000ms pause after typing
                speed={300} // typing speed (ms per character)
                wrapper="span"
                cursor={false}
                repeat={Infinity} // loop
                className="text-dark"
              />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
