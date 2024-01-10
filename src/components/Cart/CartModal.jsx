import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { DeleteOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import "./CartModal.scss";

const CartModal = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  return (
    <div className="cart border rounded-3">
      <h4>Products In Cart</h4>
      {products?.map((item) => (
        <div key={item.id}>
          <Link className="link" to={`/product/${item.id}`}>
            <div className="item">
              <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
              <div className="details">
                <h6>{item.title}</h6>
                <div className="price">
                  {item.quantity} x GHC {item.price}
                </div>
              </div>
              <DeleteOutlined
                className="delete"
                onClick={() => dispatch(removeItem(item.id))}
              />
            </div>
          </Link>
          <hr />
        </div>
      ))}

      <div className="total">
        <span>SubTotal</span>
        <span>GHC {totalPrice()}</span>
      </div>

      <div className="btn">
        
        <Link className="link" to="/cart">
          <button className="cartpage">Proceed To Cart</button>
        </Link>
      </div>

      <div className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </div>
    </div>
  );
};

export default CartModal;
