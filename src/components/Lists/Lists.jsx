import Card from "../Card/Card";


const Lists = () => {

      const data = [
        {
          id: 1,
          name: "Leanne Graham",
          img: "../../../public/battery-removebg-preview.png",
          username: "5454",
        },
        {
          id: 2,
          name: "Ervin Howell",
          img: "../../../public/battery-removebg-preview.png",
          username: "787",
        },
        {
          id: 3,
          name: "Clementine Bauch",
          img: "../../../public/battery-removebg-preview.png",
          username: "74575",
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          img: "../../../public/battery-removebg-preview.png",
          username: "1457",
        },
      ];

  return (
    <div className="list">
      <div className="row">
        {data?.map((item) => (
          <div className="col-6 col-md-3" key={item.id}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lists