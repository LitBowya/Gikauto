import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Categories.scss";

const Categories = () => {
  const { data, loading, error } = useFetch("/Departments?populate=*");

  return (
    <div className="categories container my-3">
      <h4 className="header text-end px-md-5">Categories</h4>
      <div className="category-item">
        {loading}
        {error && <p>Error: Something went wrong</p>}
        {data &&
          data?.map((item) => (
            <Link key={item.id} className="link" to={`/products/${item.id}`}>
              <div className="category">
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    item?.attributes?.image?.data?.attributes?.url
                  }
                  alt={item.attributes.Title}
                />

                <p>{item.attributes.Title}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Categories;
