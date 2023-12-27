import { useParams } from "react-router-dom";
import { useState } from "react";

import Lists from "../../components/Lists/Lists";
import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);

  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  const [maxPrice, setMaxPrice] = useState(10000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products">
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-3">
            <button
              className="btn btn-outline-secondary mb-3 w-100 d-lg-none"
              type="button"
              onClick={() => togglePanel("navbarSupportedContent")}
              aria-expanded={activePanel === "navbarSupportedContent"}
              aria-controls="navbarSupportedContent"
            >
              <span>Show filter</span>
            </button>

            <div
              className={`collapse card d-lg-block mb-3${
                activePanel === "navbarSupportedContent" ? " show" : ""
              }`}
              id="navbarSupportedContent"
            >
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="filterItem">
                  <h5>Filter By Price</h5>
                  <div className="inputItem">
                    <span>0</span>
                    <input
                      type="range"
                      min={0}
                      max={10000}
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <span>{maxPrice}</span>
                  </div>
                </div>
                <div className="filterItem">
                  <h5>Sort By Price</h5>
                  <div className="inputItem">
                    <input
                      type="radio"
                      name="price"
                      id="asc"
                      value="asc"
                      onChange={(e) => setSort("asc")}
                    />
                    <label htmlFor="asc">Price (Lowest First)</label>
                  </div>
                  <div className="inputItem">
                    <input
                      type="radio"
                      name="price"
                      id="desc"
                      value="desc"
                      onChange={(e) => setSort("desc")}
                    />
                    <label htmlFor="desc">Price (Highest First)</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="hero-section mb-5">
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
                        <h5 className="title">
                          Discover the power of Total Lubricants
                        </h5>
                        <p className="subtitle">
                          Engineered for peak performance, our range of
                          lubricants ensures optimal efficiency and durability
                          for your machinery. Explore our high-quality solutions
                          today for smoother operations and enhanced machinery
                          lifespan.
                        </p>
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
                        <h5 className="title">Engineered for excellence</h5>
                        <p className="subtitle">
                          GUD filters stand as a benchmark in engine protection.
                          Designed with precision and advanced filtration
                          technology, GUD filters ensure optimal performance,
                          cleaner oil, and prolonged engine life. Trust GUD for
                          superior filtration and safeguard the efficiency of
                          your engine mile after mile.
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
                        <h5 className="title">
                          Introducing Visca Power Battery
                        </h5>
                        <p className="subtitle">
                          The epitome of reliable energy storage solutions. With
                          cutting-edge technology and unparalleled durability,
                          Visca Power Batteries redefine longevity and
                          performance in every charge. Experience seamless power
                          delivery and sustained efficiency for all your devices
                          with Visca Power Battery, setting new standards in
                          energy innovation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="row">
              <Lists catId={catId} maxPrice={maxPrice} sort={sort} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
