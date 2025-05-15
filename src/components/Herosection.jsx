import img from "../assets/geto1.jpg";
import { TypeAnimation } from 'react-type-animation';

function HeroSection() {
  return (
    <section className="pt-5">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Text block: show first on small screens, second on large */}
          <div className="col-md-7 order-1 order-md-2 text-center text-md-start mt-md-0">
            <h1 className="fw-bold text-dark mb-4" style={{ wordSpacing: "10px" }}>
              Hi! I'm{" "}
              <TypeAnimation
                sequence={['Asif Nadaf.', 1000, '', 100]}
                speed={300}
                wrapper="span"
                cursor={false}
                repeat={Infinity}
                className="text-dark"
              />
            </h1>
          </div>

          {/* Image block: show second on small screens, first on large */}
          <div className="col-md-5 order-2 order-md-1 text-center">
            <img
              src={img}
              alt="Hero Avatar"
              className="img-fluid"
              loading="lazy"
              style={{ maxHeight: "calc(100dvh - 130px)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
