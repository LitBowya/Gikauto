import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../../redux/cartReducer";
import { DeleteOutlined } from "@mui/icons-material";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";
import "./Cart.scss";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      newQuantity = 1; // Ensure the quantity doesn't go below 1
    }

    dispatch(updateQuantity({ productId, newQuantity }));
  };

  return (
    <div className="cartpage">
      <div className="container my-3">
        <div className="row">
          <div className="col-lg-9 my-1">
            <div className="card border shadow-0">
              <div className="m-4">
                <h4 className="card-title mb-4 text-end">Your shopping cart</h4>
                <div className="row gy-3 mb-4">
                  {products?.map((item) => (
                    <div key={item.id}>
                      <div className="item row">
                        <div className="col-4">
                          <img
                            src={process.env.REACT_APP_UPLOAD_URL + item.img}
                            alt=""
                          />
                          <div className="details">
                            <h5>{item.title}</h5>
                            <div className="price">
                              {item.quantity} x GHC {item.price}
                            </div>
                          </div>
                        </div>
                        <div className="col-3">
                          <button className="quantity">
                            <button
                              className="btn1"
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                            >
                              -
                            </button>
                            {item.quantity}
                            <button
                              className="btn2"
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                            >
                              +
                            </button>
                          </button>
                        </div>
                        <div className="deleteIcon col-3">
                          <DeleteOutlined
                            className="delete"
                            onClick={() => dispatch(removeItem(item.id))}
                          />
                        </div>
                        <hr />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 my-1">
            <div className="card shadow-0 border">
              <div className="card-body">
                <h5 className="text-end">Total</h5>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2">GHC {totalPrice()}</p>
                </div>
                <div className="mt-3">
                  <Link to="/" className="btn btn-light w-100 border mt-2">
                    Back to shop
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
