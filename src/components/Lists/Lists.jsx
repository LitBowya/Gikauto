
import Card from "../Card/Card";

import useFetch from "../../hooks/useFetch";

const Lists = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: Something went wrong!{error}</div>;
  }

  return (
    <div className="list">
      <div className="row">
        {data?.map((item) => (
          <div className="col-6 col-md-3" key={item.id}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lists;
