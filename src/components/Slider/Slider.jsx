import Spinner from "../Spinner/Spinner.jsx";
import useFetch from "../../hooks/useFetch";
import "./Slider.scss";

const Slider = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/sliders?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className={`slider ${type}`}>
      <div className="container">
        {loading} {/* Display Spinner during loading */}
        {error && <p>Error: {error.message}</p>}
        {data?.length > 0 && (
          <div className="hero-section">
            <div className="img-container">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data[0].attributes?.image?.data?.attributes?.url
                }
                alt="Slider Image"
                onError={(e) => {
                  e.target.style.display = "none"; // Hide the image on error
                }}
              />
            </div>
            <div className="text-container">
              <p className="px-md-5">{data[0].attributes?.text}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
