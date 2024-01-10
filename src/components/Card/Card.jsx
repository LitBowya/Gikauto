import { Link } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

import "./Card.scss";

const Card = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevents the Link from navigating

    dispatch(
      addToCart({
        id: item.id,
        title: item.attributes.title,
        price: item.attributes.price,
        img: item.attributes.img.data.attributes.url,
        quantity: 1
      })
    );
  };

  return (
    <div className="card-container">
      <Link className="link" to={`/product/${item.id}`}>
        <div className="img">
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item?.attributes?.img?.data?.attributes?.url
            }
            alt=""
          />
        </div>
        <div className="card-bottom">
          <h4 className="title">{item?.attributes.title}</h4>
          <div className="prices">
            <p className="price">GHC {item?.attributes.price}</p>
          </div>
          <div className="add" onClick={handleAddToCart}>
            <ShoppingCart />
          </div>
          <div className="gikautos">
            GIK<span>autos</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
