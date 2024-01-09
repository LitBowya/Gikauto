import { LocationOn } from "@mui/icons-material";
import { Call } from "@mui/icons-material";
import { Mail } from "@mui/icons-material";
import { LockClock } from "@mui/icons-material";
import Spinner from "../../components/Spinner/Spinner"

import useFetch from "../../hooks/useFetch";
import './AboutUs.scss'

const AboutUs = () => {
  const { data, loading, error } = useFetch("/about-uses?populate=*");

  // Check if data is available
  if (loading) {
    return <p>{<Spinner />}</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Check if data is an array and has at least one element
  if (!Array.isArray(data) || data.length === 0) {
    return <p>No data available</p>;
  }

  const text = data[0];


  return (
    <div className="about-us ">
      <div className="hero-section">
        <h3>About <span>GIK<span>autos</span></span></h3>
      </div>
      <div className="description">
          <h3 className="text-center">Our Info</h3>
        <div className="row">
          <div className="col-md-4 col-lg-3">
            <div className="desc-item">
              <div className="icon-box">
                <LocationOn className="icon" />
              </div>
              <div className="desc-text">
                <div className="top-text">
                  <span className="first-text">Location</span>
                </div>
                <div className="down-text">
                  <span className="third-text">Tema Community 1</span>
                  <span>Mankoadze, Akasanoma Street</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="desc-item">
              <div className="icon-box">
                <Call className="icon"/>
              </div>
              <div className="desc-text">
              <div className="top-text">
                  <span className="first-text">10*6 Service</span>
                </div>
                <div className="down-text">
                  <span className="third-text">0242130480</span>
                  <span className="third-text">0242130480</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="desc-item">
              <div className="icon-box">
                <Mail className="icon"/>
              </div>
              <div className="desc-text">
              <div className="top-text">
                  <span className="first-text">Drop A Mail</span>
                </div>
                <div className="down-text">
                  <span className="third-text">honorable@gmail.com</span>
                  <span className="third-text">honorable@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="desc-item">
              <div className="icon-box">
                <LockClock className="icon"/>
              </div>
              <div className="desc-text">
              <div className="top-text">
                  <span className="first-text">Office Hours</span>
                </div>
                <div className="down-text">
                  <span className="third-text">Mon - Sat</span>
                  <span>8am - 6pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      <div className="container py-4">
        <div className="container-info row">
        <div className="img-container col-lg-6">
          <img src={
            process.env.REACT_APP_UPLOAD_URL + 
            text.attributes?.image?.data?.attributes?.url
          } alt={text.attributes?.title} />
        </div>
        <div className="text-container col-lg-6">
          <header>
            <h3 className="title">{text.attributes?.title}</h3>
            <p className="subtitle">{text.attributes?.about_us}</p>
          </header>
        </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default AboutUs;
