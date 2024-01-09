import React from "react";
import Card from "../Card/Card";
import "../FeaturedProducts/FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";
import Spinner from "../Spinner/Spinner";

const FeaturedRandomProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`,
  );

  const getRandomItems = (arr, count) => {
    const shuffled = arr ? arr.sort(() => 0.5 - Math.random()) : [];
    return shuffled.slice(0, count);
  };

  return (
    <div className="featuredRandomProducts container">
      <div className="top mb-3 mt-5">
        <h4>Similar Products</h4>
      </div>
      {loading && <div>{<Spinner />}</div>}
      {error && <div>Error: Something went wrong!</div>}
      {!loading && !error && data && (
        <div className="bottom row">
          {getRandomItems(data, 6).map((item) => (
            <div key={item.id} className="col-6 col-lg-4 col-xl-3">
              <Card item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedRandomProducts;
