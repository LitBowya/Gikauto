import React from "react";
import useFetch from "../../hooks/useFetch";
import "./Slider.scss";

const Slider = () => {
  const { data, loading, error } = useFetch(`/sliders?populate=*&`);

  return (
    <div className="slider">
      <div className="slider-container">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data &&
          data.map((item) => (
            <div
              key={item?.id}
              className="hero-section"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
                  process.env.REACT_APP_UPLOAD_URL +
                  item?.attributes?.image?.data?.attributes?.url
                })`
              }}
            >
              <div className="hero-text">
                <p className="text">{item?.attributes?.text}</p>
                <p className="large-text">{item?.attributes?.large_text}</p>
                <p className="small-text">{item?.attributes?.small_text}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Slider;
