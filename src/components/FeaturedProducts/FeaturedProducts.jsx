import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`,
  );

  return (
    <div className="featuredProducts container my-3">
      <header className="product-title">
        <h4 className="text-end">{type}</h4>
      </header>
      <div className="top mb-3 mt-5"></div>
      {loading}
      {error && <div>Error: Something went wrong!</div>}
      {!loading && !error && (
        <div className="bottom row">
          {data?.slice(0, 6).map((item) => (
            <div key={item.id} className="col-6 col-md-3 col-xl-2">
              <Card item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );

};

export default FeaturedProducts;
