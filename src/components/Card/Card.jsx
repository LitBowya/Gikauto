import { Link } from 'react-router-dom';

import './Card.scss';

const Card = ({ item }) => {

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
          <div className="gikautos">
            GIK<span>autos</span>
            </div>
        </div>
      </Link>
    </div>
  );
}

export default Card