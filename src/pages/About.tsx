import "./About.css"; // custom styles from your CSS below

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Content Column */}
          <div className="col-lg-6 col-md-12 order-2 order-lg-1">
            <div className="inner-column ps-lg-5">
              <div className="sec-title">
                <span className="title">About Company</span>
                <h2>
                  We are leader in <br /> Industrial market Since 1992
                </h2>
              </div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </div>
              <ul className="list-style-one">
                <li>Lorem Ipsum is simply dummy text</li>
                <li>Consectetur adipisicing elit</li>
                <li>Sed do eiusmod tempor incididunt</li>
              </ul>
              <div className="btn-box">
                <a href="#contact" className="theme-btn btn-style-one">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-lg-6 col-md-12 order-1 order-lg-2">
            <div className="inner-column position-relative">
              <figure className="image-1 mb-3">
                <img src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt="About 1" className="img-fluid rounded shadow" />
              </figure>
              <figure className="image-2 position-absolute">
                <img src="https://i.ibb.co/JvN0NVB/image-2-about.jpg" alt="About 2" className="img-fluid rounded shadow" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
