import { Link } from 'react-router-dom';
import './Categories.scss'

const Categories = () => {
  return (
    <div className="categories container mt-4">
      <h3 className="header">Categories</h3>
      <div className="category-item">
        <Link className="link" to="/products/4">
          <div className="category">
            <img
              className="img-fluid"
              src="https://media.istockphoto.com/id/1402462303/photo/close-up-old-oil-filter-of-car-with-wrench-in-hand-service-man-old-filter-change-in-engine.jpg?b=1&s=612x612&w=0&k=20&c=P9lKhckNhJPDLZDwI-EWwQjyxza2lU0hSgTCxaxa7qs="
              alt=""
            />
            <p>Oil Filter</p>
          </div>
        </Link>

        <Link className="link" to="/products/3">
          <div className="category">
            <img
              className="img-fluid"
              src="https://media.istockphoto.com/id/1325588832/photo/pouring-motor-oil-for-motor-vehicles-from-a-gray-bottle-into-the-engine.jpg?b=1&s=612x612&w=0&k=20&c=M1YtKpm5DJrCX05aZ0cJAEdzYDHgumuMzmo98f-B9n4="
              alt=""
            />
            <p>Lubricants</p>
          </div>
        </Link>

        <Link className="link" to="/products/1">
          <div className="category">
            <img
              className="img-fluid"
              src="https://media.istockphoto.com/id/1023401736/photo/car-engine.jpg?b=1&s=612x612&w=0&k=20&c=pNgk6GaLh9ph6OnW3pxrudUDDssICEF5vyUiklTJDT8="
              alt=""
            />
            <p>Belts</p>
          </div>
        </Link>

        <Link className="link" to="/products/2">
          <div className="category">
            <img
              className="img-fluid"
              src="https://media.istockphoto.com/id/183797799/photo/vehicle-batteries.jpg?b=1&s=612x612&w=0&k=20&c=lp0u28vqJKUKOMfSiXlnp_2xTCyXNhnkqEz0VcN-qP4="
              alt=""
            />
            <p>Battery</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Categories