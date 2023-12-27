import { Link } from 'react-router-dom';

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Favorite } from '@mui/icons-material';
import './Card.scss';

const Card = ({item}) => {
  return (
    <div className="card-container">
      <Link className="link" to={`/product/${item.id}`}>
        <div className="img">
          <img src={item.img} alt="" />
        </div>
        <div className="card-bottom">
          <h4 className="title">{item.name}</h4>
          <div className="prices">
            <p className="price">GHC {item.username}</p>
          </div>
          <div className="cartIcon">
            <ShoppingBagOutlinedIcon className="icon" />
            <Favorite className="icon" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card