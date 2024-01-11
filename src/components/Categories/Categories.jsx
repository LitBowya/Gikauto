import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Categories.scss";

const Categories = () => {
  const { data, loading, error } = useFetch("/Departments?populate=*");

  return (
    <div className="categories-container">
      <div className="category-item container">
        <div className="categories">
          {loading}
          {error && <p>Error: Something went wrong</p>}
          {data &&
            data?.map((item) => (
              <Link key={item.id} className="link" to={`/products/${item.id}`}>
                <div className="category">
                  <div className="img-container">
                    <img
                      src={
                        process.env.REACT_APP_UPLOAD_URL +
                        item?.attributes?.image?.data?.attributes?.url
                      }
                      alt={item.attributes.Title}
                    />
                  </div>

                  <div className="text-container">
                    <p className="title">{item.attributes.Title}</p>
                    <p className="sub_title">{item.attributes.sub_title}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
