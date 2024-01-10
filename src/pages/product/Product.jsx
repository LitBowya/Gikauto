import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import useFetch from "../../hooks/useFetch";
import CartModal from "../../components/Cart/CartModal";
import Reviews from "../../components/Review/Review";
import { AddShoppingCart } from "@mui/icons-material";
import SimilarProduct from "../../components/SimilarProducts/SimilarProducts";
import "./Product.scss";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showFullSpecifications, setShowFullSpecifications] = useState(false);
  const [fullSpecifications, setFullSpecifications] = useState([]);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const specsKeys = data?.attributes?.specs
    ? Object.keys(data.attributes.specs)
    : [];

  const description = data?.attributes?.desc || "";
  const truncatedDescription = description.split(" ").slice(0, 50).join(" ");
  const remainingDescription = description.split(" ").slice(50).join(" ");
  const specifications = showFullSpecifications
    ? specsKeys
    : specsKeys.slice(0, 4);

  // Fetch full specifications when the component mounts
  useEffect(() => {
    const fetchFullSpecifications = async () => {
      try {
        const response = await fetch(`/products/${id}/specs`);
        const fullSpecsData = await response.json();
        setFullSpecifications(fullSpecsData);
      } catch (error) {
        console.error("Error fetching full specifications:", error);
      }
    };

    if (showFullSpecifications) {
      fetchFullSpecifications();
    }
  }, [id, showFullSpecifications]);

  // Function to toggle the display of full description
  const toggleFullDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  // Function to toggle the display of full specifications
  const toggleFullSpecifications = () => {
    setShowFullSpecifications((prev) => !prev);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: Something went wrong!{error}</div>;
  }

  return (
    <div className="product">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 border rounded-3">
            <div className="row">
              <div className="col-md-5 left">
                <div className="mainImg">
                  <img
                    src={
                      process.env.REACT_APP_UPLOAD_URL +
                      data?.attributes[selectedImg]?.data?.attributes?.url
                    }
                    alt=""
                  />
                </div>

                <div className="images">
                  {["img", "img1", "img2", "img3"]
                    .filter((imageKey) => {
                      const imageUrl =
                        process.env.REACT_APP_UPLOAD_URL +
                        data?.attributes?.[imageKey]?.data?.attributes?.url;
                      return imageUrl; // Only keep image keys with a valid imageUrl
                    })
                    .map((imageKey) => (
                      <img
                        key={imageKey}
                        src={
                          process.env.REACT_APP_UPLOAD_URL +
                          data?.attributes?.[imageKey]?.data?.attributes?.url
                        }
                        alt=""
                        onClick={(e) => setSelectedImg(imageKey)}
                        className="border"
                      />
                    ))}
                </div>
              </div>
              <div className="col-md-7 right">
                <div className="head">
                  <h3 className="title">{data?.attributes?.title}</h3>
                  <span className="price">GHC {data?.attributes?.price}</span>
                </div>
                <p className="desc">
                  {showFullDescription ? description : truncatedDescription}
                  {!showFullDescription && remainingDescription && (
                    <span>
                      <p className="more" onClick={toggleFullDescription}>
                        Read more
                      </p>
                    </span>
                  )}
                  {showFullDescription && (
                    <span>
                      <p className="more" onClick={toggleFullDescription}>
                        Hide
                      </p>
                    </span>
                  )}
                </p>

                <div className="cartquantity">
                  <div className="quantity">
                    <button
                      className="btn1"
                      onClick={() =>
                        setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                      }
                    >
                      -
                    </button>
                    {quantity}
                    <button
                      className="btn2"
                      onClick={() => setQuantity((prev) => prev + 1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="add"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: data.id,
                          title: data.attributes.title,
                          price: data.attributes.price,
                          img: data.attributes.img.data.attributes.url,
                          quantity
                        })
                      )
                    }
                  >
                    <AddShoppingCart /> Add To Cart
                  </button>
                </div>
                <hr />
                <div className="specification">
                  <header>
                    <p className="fw-bold">Specifications</p>
                  </header>
                  <div className="specs">
                    {specifications.map((key) => (
                      <div key={key}>
                        <div className="spec-item">
                          <span className="text-muted">{key}:</span>{" "}
                          <strong>{data?.attributes?.specs[key]}</strong>
                        </div>
                      </div>
                    ))}
                    {!showFullSpecifications && specsKeys.length > 4 && (
                      <span>
                        <p className="more" onClick={toggleFullSpecifications}>
                          Read more
                        </p>
                      </span>
                    )}
                    {showFullSpecifications && (
                      <span>
                        <p className="more" onClick={toggleFullSpecifications}>
                          Hide
                        </p>
                      </span>
                    )}
                  </div>
                </div>
                <hr />
                <div className="reviews">
                  <Reviews productId={id} />
                </div>
              </div>
            </div>
            <div className="similarproducts">
              <SimilarProduct type={data?.attributes?.type} />
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-3 cartmodal">
            <CartModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
