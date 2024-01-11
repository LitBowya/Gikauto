import { Link } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { toast } from "react-toastify";

import "./Card.scss";

const Card = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {

    e.preventDefault();

    dispatch(
      addToCart({
        id: item.id,
        title: item.attributes.title,
        price: item.attributes.price,
        img: item.attributes.img.data.attributes.url,
        quantity: 1
      })
    );

    // Display toast message
    toast.success("Added to cart successfully");
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
          <div>
            <h4 className="title">{item?.attributes.title}</h4>
            <div className="prices">
              <p className="price">GHC {item?.attributes.price}</p>
            </div>
          </div>
          <div>
            <div className="add" onClick={handleAddToCart}>
              <ShoppingCart className="icon" />
            </div>
            <div className="gikautos">
              GIK<span>autos</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
