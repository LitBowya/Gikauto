import { useParams } from "react-router-dom";
import { useState,useEffect, useRef } from "react";
import Spinner from "../../components/Spinner/Spinner";
import Lists from "../../components/Lists/Lists";
import useFetch from "../../hooks/useFetch";
import TuneIcon from "@mui/icons-material/Tune";
import "./Products.scss";

const Products = () => {

  const catId = parseInt(useParams().id);

  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  const [maxPrice, setMaxPrice] = useState(10000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setselectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setselectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActivePanel(null);
      }
    };

    // Add event listener when the component mounts
    window.addEventListener("click", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []); 

  return (
    <div className="products">
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-3" ref={dropdownRef}>
            <div
              className="filter d-lg-none text-end"
              type="button"
              onClick={() => togglePanel("navbarSupportedContent")}
              aria-expanded={activePanel === "navbarSupportedContent"}
              aria-controls="navbarSupportedContent"
            >
              <span className="tuneicon">
                Filter
                <TuneIcon className="mb-2" />
              </span>
            </div>

            <div
              className={`collapse d-lg-block mb-3${
                activePanel === "navbarSupportedContent" ? " show" : ""
              }`}
              id="navbarSupportedContent"
            >
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="filterItem">
                  <h5>Product Categories</h5>
                  {data?.map((item) => (
                    <div className="inputItem" key={item.id}>
                      <input
                        type="checkbox"
                        value={item.id}
                        id={item.id}
                        onChange={handleChange}
                      />
                      <label htmlFor={item.id}>{item.attributes.title}</label>
                    </div>
                  ))}
                </div>
                <div className="filterItem">
                  <h5>Filter By Price</h5>
                  <div className="inputItem">
                    <span>0</span>
                    <input
                      type="range"
                      min={0}
                      max={9999}
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
              {loading && <Spinner />}
              {error && <div>Error: Something went wrong! {error}</div>}
              {!loading && !error && (
                <div className="row">
                  <Lists
                    catId={catId}
                    maxPrice={maxPrice}
                    sort={sort}
                    subCats={selectedSubCats}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
