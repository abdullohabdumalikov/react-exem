import React from "react";
import "../Man/man.css";
function Man() {
  let myShop = [
    {
      id: 1,
      img: "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1689180417/758664_FACK7_9768_001_084_0000_Light.jpg",
      name: "Gucci duffle bag",
      price: 960,
      aksiya: "17%",
      reting: 4.5,
    },
    {
      id: 2,
      img: "https://www.jumbo-computer.com/cdn/shop/files/2YM-000R-00214-03_800x.png?v=1721293152",
      name: "RGB Liquid CPU Cooler",
      price: 1960,
      aksiya: false,
      reting: 4.5,
    },
    {
      id: 3,
      img: "https://fantech.ph/wp-content/uploads/2019/04/2ef2abad.png",
      name: "GP11 Shooter USB Gamepad",
      price: 550,
      aksiya: false,
      reting: 4.5,
    },
    {
      id: 4,
      img: "https://www.grailssf.com/cdn/shop/products/17041903_2_burned_300x300.png?v=1514071142",
      name: "Quilted Satin Jacket",
      price: 750,
      aksiya: false,
      reting: 4.5,
    },
    {
      id: 5,
      img: "https://png.pngtree.com/png-clipart/20241114/original/pngtree-asus-elegant-gaming-laptop-png-image_17033096.png",
      name: "ASUS FHD Gaming Laptop",
      price: 960,
      aksiya: "17%",
      reting: 4.5,
    },
    {
      id: 6,
      img: "https://images.philips.com/is/image/philipsconsumer/ee96b59832674fcd81e2b17700991929?wid=700&hei=700&$pnglarge$",
      name: "IPS LCD Gaming Monitor",
      price: 1160,
      aksiya: false,
      reting: 4.5,
    },
    {
      id: 7,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pk6CAZHOZyGiHkVW1mbjSKazuviEppjn8w&s",
      name: "HAVIT HV-G92 Gamepad",
      price: 560,
      aksiya: false,
      reting: 4.5,
    },
    {
      id: 8,
      img: "https://www.techlandbd.com/image/catalog/Keyboard/IMICE/AK-600/imice-ak-600-gaming-keyboard-1.jpg",
      name: "AK-900 Wired Keyboard",
      price: 200,
      aksiya: false,
      reting: 4.5,
    },
  ];
  return (
    <div className="card">
      {myShop.map((product) => (
        <div>
          <p className="aksiya">
            {product.aksiya !== false ? product.aksiya : null}
          </p>
          <img src={product.img} alt="" />
          <span className="disc">
            <button>
              <i class="fa-solid fa-cart-shopping"></i> Add To Cart
            </button>
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <p className="aksiya">
              {product.reting !== false ? product.reting : null}
            </p>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Man;
