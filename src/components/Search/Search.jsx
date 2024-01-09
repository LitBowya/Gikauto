import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import "./Search.scss";

const Search = () => {
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch(`/products?populate=*&_q=${query}`);

  return (
    <div className="search">
      <div className="container">
        <input
          type="text"
          placeholder="Search by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="row">
          {query !== "" && ( // Check if query is not empty
            <>
              {loading && <div>{<Spinner />}</div>}
              {error && <div>Error: Something went wrong!</div>}
              {!loading && !error && (
                <div className="bottom row">
                  {data?.map((item) => (
                    <div key={item.id} className="col-6 col-md-3 col-xl-2">
                      <Card item={item} />
                    </div>
                  ))}
                </div>
                
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
