import { Link } from "react-router-dom";

import { DeleteOutlined } from "@mui/icons-material";
import './Cart.scss'

const Cart = () => {

    const data = [
      {
        id: 1,
        name: "Leanne Graham",
        img: "../../../public/battery-removebg-preview.png",
        price: "5454",
        desc: "lorem ahdo adfoihfas aofhidsf  agdaskl oafiodf aso oihdosaifhdoaf oiafho fhsd oafhidfo asdofih asfiohfoiahsf oihfdsafih odsif dsfo iosfhsd89f sdsd hidsfh dsof aoisytnsdaf sdy8 safudsrf  saoyef dnhfo; as8f aas fsad8ofyes asfoystf se sdfgysa8o esfrhaso e8rtas hfsdoif asfhsdfoiasf f sdfsaoif sadfdsi8foas hsdfhosa fos"
      },
      {
        id: 2,
        name: "Ervin Howell",
        img: "../../../public/battery-removebg-preview.png",
        price: "787",
        desc: "lorem ahdo adfoihfas aofhidsf  agdaskl oafiodf aso oihdosaifhdoaf oiafho fhsd oafhidfo asdofih asfiohfoiahsf oihfdsafih odsif dsfo iosfhsd89f sdsd hidsfh dsof aoisytnsdaf sdy8 safudsrf  saoyef dnhfo; as8f aas fsad8ofyes asfoystf se sdfgysa8o esfrhaso e8rtas hfsdoif asfhsdfoiasf f sdfsaoif sadfdsi8foas hsdfhosa fos"
      },
      {
        id: 3,
        name: "Clementine Bauch",
        img: "../../../public/battery-removebg-preview.png",
        price: "74575",
        desc: "lorem ahdo adfoihfas aofhidsf  agdaskl oafiodf aso oihdosaifhdoaf oiafho fhsd oafhidfo asdofih asfiohfoiahsf oihfdsafih odsif dsfo iosfhsd89f sdsd hidsfh dsof aoisytnsdaf sdy8 safudsrf  saoyef dnhfo; as8f aas fsad8ofyes asfoystf se sdfgysa8o esfrhaso e8rtas hfsdoif asfhsdfoiasf f sdfsaoif sadfdsi8foas hsdfhosa fos"
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        img: "../../../public/battery-removebg-preview.png",
        price: "1457",
        desc: "lorem ahdo adfoihfas aofhidsf  agdaskl oafiodf aso oihdosaifhdoaf oiafho fhsd oafhidfo asdofih asfiohfoiahsf oihfdsafih odsif dsfo iosfhsd89f sdsd hidsfh dsof aoisytnsdaf sdy8 safudsrf  saoyef dnhfo; as8f aas fsad8ofyes asfoystf se sdfgysa8o esfrhaso e8rtas hfsdoif asfhsdfoiasf f sdfsaoif sadfdsi8foas hsdfhosa fos"
      },
    ];

  return (
    <div className="cart">
      <h4>Products In Cart</h4>
      {data?.map((item) => (
        <div key={item.id}>
          <Link className="link" to={`/product/${item.id}`}>
            <div className="item">
              <img src={item.img} alt="" />
              <div className="details">
                <h5>{item.name}</h5>
                <div className="price">1 x GHC {item.price}</div>
              </div>
              <DeleteOutlined className="delete" />
            </div>
          </Link>
          <hr />
        </div>
      ))}

      <div className="total">
        <span>SubTotal</span>
        <span>GHC 125</span>
      </div>
      <div className="btn">
        <button>Proceed To Checkout</button>
      </div>
      <div className="reset">Reset Cart</div>
    </div>
  );
}

export default Cart