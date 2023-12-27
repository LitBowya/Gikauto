import Card from '../Card/Card';

import './FeaturedProducts.scss'

const data = [
  {
    id: 1,
    name: "Leanne Graham",
    img: "../../../public/GUD_oil_filters-asap-motors-fourways-removebg-preview.png",
    username: "Bret",
  },
  {
    id: 2,
    name: "Ervin Howell",
    img: "../../../public/GUD_oil_filters-asap-motors-fourways-removebg-preview.png",
    username: "Antonette",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    img: "../../../public/GUD_oil_filters-asap-motors-fourways-removebg-preview.png",
    username: "Samantha",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    img: "../../../public/GUD_oil_filters-asap-motors-fourways-removebg-preview.png",
    username: "Karianne",
  },
  {
    id: 5,
    name: "Leanne Graham",
    img: "../../../public/GUD_oil_filters-asap-motors-fourways-removebg-preview.png",
    username: "Bret",
  },
  {
    id: 6,
    name: "Ervin Howell",
    img: "../../../public/GUD_oil_filters-asap-motors-fourways-removebg-preview.png",
    username: "Antonette",
  },
  {
    id: 7,
    name: "Clementine Bauch",
    img: "../../../public/GUD_oil_filters-asap-motors-fourways-removebg-preview.png",
    username: "Samantha",
  },
  {
    id: 8,
    name: "Patricia Lebsack",
    img: "../../../public/GUD_oil_filters-asap-motors-fourways-removebg-preview.png",
    username: "Karianne",
  },
];

const FeaturedProducts = ({type}) => {
  return (
    <div className="featuredProducts container">
      <div className="top mb-3 mt-5">
        <h4 className='text-end'>{type} Products</h4>
      </div>
      <div className="bottom row">
        {data.slice(0, 6).map((item) => (
          <div key={item.id} className="col-6 col-md-3 col-xl-2">
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts