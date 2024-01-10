import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { makeRequest } from "../../makeRequest";
import Rating from "react-rating";
import moment from "moment";
import "./Review.scss";

const Reviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [rating, setRating] = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const { data, error, fetchData } = useFetch(
    `/reviews?populate=*&product.id_eq=${productId}`
  );

  useEffect(() => {
    if (data) {
      setReviews(data);
    }
  }, [data]);

  const handleReviewSubmit = () => {
    makeRequest
      .post("reviews", {
        data: {
          CustomerName: customerName,
          Rating: rating,
          Comment: newReview,
          product: productId
        }
      })
      .then((response) => {
        console.log("Review submitted successfully:", response.data);

        // Fetch updated reviews after submitting
        fetchData(`/reviews?populate=*&product.id_eq=${productId}`);
        setNewReview("");
        setCustomerName("");
        setRating(0);
      })
      .catch((error) => console.error("Error submitting review:", error));
  };

  const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  return (
    <div className="reviews">
      <header>
        <p className="fw-bold">Reviews</p>
      </header>
      {error && <p>Error fetching reviews: {error.message}</p>}
      <div className="review-items">
        {visibleReviews.length > 0 ? (
          visibleReviews.map(
            (review) =>
              review.attributes.product.data.id == productId && (
                <div key={review?.attributes?.id} className="review-item">
                  <div>{review?.attributes?.CustomerName}</div>
                  <div>{review?.attributes?.Comment}</div>
                  <Rating
                    readonly
                    initialRating={review?.attributes?.Rating}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    className="stars"
                  />
                  <div>
                    <p className="m-0">
                      {moment(review?.attributes?.createdAt).format(
                        "D MMMM, YYYY"
                      )}
                    </p>
                    <p>
                      {moment(review?.attributes?.createdAt).format("hh:mm A")}
                    </p>
                  </div>
                </div>
              )
          )
        ) : (
          <p>No reviews available</p>
        )}
        {!showAllReviews && reviews.length > 3 && (
          <div
            className="see-more-link"
            onClick={() => setShowAllReviews(true)}
          >
            See More
          </div>
        )}
        {showAllReviews && (
          <div
            className="see-more-link"
            onClick={() => setShowAllReviews(false)}
          >
            Hide
          </div>
        )}
      </div>
      <div>
        <div className="input-group">
          <input
            type="text"
            value={customerName}
            onChange={(e) => {
              setCustomerName(e.target.value);
            }}
            placeholder="Your Name"
          />
        </div>

        <div className="input-group">
          <textarea
            value={newReview}
            onChange={(e) => {
              setNewReview(e.target.value);
            }}
            placeholder="Write a review..."
          />
        </div>

        <div className="input-group">
          <Rating
            initialRating={rating}
            onChange={(value) => {
              setRating(value);
            }}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            className="stars"
          />
        </div>

        <div className="input-group">
          <button onClick={handleReviewSubmit}>Submit Review</button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
