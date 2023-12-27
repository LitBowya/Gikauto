import { useState } from "react";

import { AddShoppingCart } from "@mui/icons-material";
import "./Product.scss";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "../../../public/battery-removebg-preview.png",
    "../../../public/GUD_oil_filters-asap-motors-fourways-removebg-preview.png",
  ];

  return (
    <div className="product">
      <div className="container">
        <div className="row">
          <div className="col-md-5 left">
            <div className="mainImg">
              <img src={images[selectedImg]} alt="" />
            </div>

            <div className="images">
              <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
              <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
            </div>
          </div>
          <div className="col-md-7 right">
            <h3 className="title">Title</h3>
            <span className="price">GHc 288</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores quae quod explicabo praesentium doloremque veniam?
              Cupiditate, perspiciatis nostrum mollitia quae et, est consectetur
              consequuntur animi blanditiis esse quod tempora sequi!
            </p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>

            <button className="add">
              <AddShoppingCart /> Add To Cart
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
