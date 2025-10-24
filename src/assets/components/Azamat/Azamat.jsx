import React from "react";
import "../Azamat/azamt.css";
const tovar = [
  {
    id: 9,
    img: "https://www.naturesrecipe.com/wp-content/uploads/2024/04/Natures-Recipe-Chicken-Sweet-Potato-Pumpkin-Grain-Free-Small-Breed-Dry-Dog-Food-12LB-1024x1024.png",
    name: "Breed Dry Dog Food",
    price: 100,
    aksiya: false,
    reting: 3.5,
  },
  {
    id: 10,
    img: "https://i.pinimg.com/originals/69/76/46/69764619239a7fb8a5dcb5d21e44f06a.png",
    name: "CANON EOS DSLR Camera",
    price: 350,
    aksiya: "22%",
    reting: 4.8,
  },
  {
    id: 11,
    img: "https://png.pngtree.com/png-clipart/20241114/original/pngtree-asus-elegant-gaming-laptop-png-image_17033096.png",
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    aksiya: false,
    reting: 4.3,
  },
  {
    id: 12,
    img: "https://cdn11.bigcommerce.com/s-w95j9i8f88/images/stencil/320w/image-manager/routine-nav.png?t&",
    name: "Curology Product Set",
    price: 500,
    aksiya: false,
    reting: 4.5,
  },
  {
    id: 13,
    img: "https://www.pngall.com/wp-content/uploads/7/Electric-Car-Transparent.png",
    name: "Kids Electric Car",
    price: 960,
    aksiya: "17%",
    reting: 4.8,
  },
  {
    id: 14,
    img: "https://soccerwearhouse.com/cdn/shop/files/superflyacademy_3dd112d7-98ce-4293-97e8-2ab7040d9b7e_5000x.png?v=1731624167",
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    aksiya: false,
    reting: 4.3,
  },
  {
    id: 15,
    img: "https://electroslab.com/cdn/shop/files/T1156.png?v=1690192083&width=1445",
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    aksiya: false,
    reting: 4.5,
  },
  {
    id: 16,
    img: "https://bbcicecream.eu/cdn/shop/files/IC24107_BROWN_01.png?v=1707837826",
    name: "Quilted Satin Jacket",
    price: 660,
    aksiya: false,
    reting: 4.5,
  },
];
function Azamat() {
  return (
    <div className="az">
      {tovar.map((tovarlar) => (
        <div key={tovarlar.id}>
          <img src={tovarlar.img} alt="" />
          <h1>{tovarlar.name}</h1>
          <span style={{ display: "flex"}}>
            <p>💰{tovarlar.price}</p>
            <h4>⭐⭐⭐⭐⭐{tovarlar.reting}</h4>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Azamat;
