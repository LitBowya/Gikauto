
import useFetch from "../../hooks/useFetch";
import "./WhyUs.scss";

const WhyUs = () => {
  const { data, loading, error } = useFetch("/why-uses?populate=*");


  return (
    <div className="WhyUs mt-3">
      <div className="container text-dark pt-3">
        <header className="pt-4 pb-3">
          <h4 className="text-end px-md-5">Why choose us</h4>
        </header>

        <div className="mb-4">
          {loading}
          {error && <p>Error: Something went wrong</p>}
          {data && (
            <div className="row">
              {data.map((item) => (
                <div className="why-card col-md-4 col-lg-3" key={item.id}>
                  <div className="img-container">
                    <img
                      src={
                        process.env.REACT_APP_UPLOAD_URL +
                        item?.attributes?.img?.data?.attributes?.url
                      }
                      alt={item.attributes.Title}
                    />
                    <div className="go-corner" href="#">
                      <div className="go-arrow"></div>
                    </div>

                  </div>
                  <div className="text">
                    <h6 className="title">{item.attributes.Title}</h6>
                    <p className="subtitle">{item.attributes.Subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
