import useFetch from "../../hooks/useFetch";

import "./CarDeals.scss"

const CarDeals = () => {
  const { data, loading, error } = useFetch("/carlogos?populate=*"); // Fetch from the "categories" collection

  return (
    <div className="CarDeals my-2 my-md-5">
      <div className="container pb-3 pb-md-5">
        <header>
          <h4 className="text-end pb-3 px-md-5">Car Deals</h4>
        </header>
        <div className="deals">
          {loading} {/* Display spinner while loading */}
          {error && <p>Error: Something went wrong</p>}{" "}
          {/* Display error message if there's an error */}
          {data && (
            <div className="img-container">
              {data.map((item) => (
                <div key={item.id}>
                  <img
                    src={
                      process.env.REACT_APP_UPLOAD_URL +
                      item?.attributes?.image?.data?.attributes?.url
                    }
                    alt=""
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarDeals;
