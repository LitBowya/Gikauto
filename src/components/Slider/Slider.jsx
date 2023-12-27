import { useState } from "react";
import { Link } from "react-router-dom";

import "./Slider.scss";

const Slider = () => {

  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  return (
    <div className="slider">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <button
              className="btn btn-outline-secondary mb-3 w-100 d-lg-none"
              type="button"
              onClick={() => togglePanel("navbarSupportedContent")}
              aria-expanded={activePanel === "navbarSupportedContent"}
              aria-controls="navbarSupportedContent"
            >
              <span>Categories</span>
            </button>

            <div
              className={`collapse card d-lg-block mb-3${
                activePanel === "navbarSupportedContent" ? " show" : ""
              }`}
              id="navbarSupportedContent"
            >
              
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="item">
                  <Link className="link" to="/products/1">
                    Belts
                  </Link>
                </div>
                <div className="item">
                  <Link className="link" to="/products/2">
                    Battery
                  </Link>
                </div>
                <div className="item">
                  <Link className="link" to="/products/3">
                    Lubricants
                  </Link>
                </div>
                <div className="item">
                  <Link className="link" to="/products/4">
                    Oil Filter
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-container-1">
                    <div className="carousel-image">
                      <img
                        src="../../../public/grattotal-removebg-preview.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="carousel-text">
                      <h4 className="title">
                        Discover the power of Total Lubricants
                      </h4>
                      <p className="subtitle">
                        Engineered for peak performance, our range of lubricants
                        ensures optimal efficiency and durability for your
                        machinery.</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-container-2">
                    <div className="carousel-image">
                      <img
                        src="../../../public/GUD_oil_filters-asap-motors-fourways-removebg-preview.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="carousel-text">
                      <h4 className="title">Engineered for excellence</h4>
                      <p className="subtitle">
                        GUD filters stand as a benchmark in engine protection.
                        Designed with precision and advanced filtration
                        technology, GUD filters ensure optimal performance,
                        cleaner oil, and prolonged engine life.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-container-3">
                    <div className="carousel-image">
                      <img
                        src="../../../public/battery-removebg-preview.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="carousel-text">
                      <h4 className="title">Introducing Visca Power Battery</h4>
                      <p className="subtitle">
                        The epitome of reliable energy storage solutions. With
                        cutting-edge technology and unparalleled durability,
                        Visca Power Batteries redefine longevity and performance
                        in every charge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden=""
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden=""
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
