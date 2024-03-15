import React from "react";
import "./_products.scss";

function Products() {
  const productData = [
    {
      pName: "Jacket",
      price: 5,
      img: "shop-1.jpg",
    },
    {
      pName: "Jacket",
      price: 15,
      img: "shop-2.jpg",
    },
    {
      pName: "Purse",
      price: 55,
      img: "shop-3.jpg",
    },
    {
      pName: "Dress",
      price: 45,
      img: "shop-4.jpg",
    },
    {
      pName: "Denim",
      price: 25,
      img: "shop-5.jpg",
    },
    {
      pName: "Sweater",
      price: 23,
      img: "shop-6.jpg",
    },
    {
      pName: "Pants",
      price: 28,
      img: "shop-7.jpg",
    },
    {
      pName: "Socks",
      price: 95,
      img: "shop-8.jpg",
    },
    {
      pName: "gloves",
      price: 21,
      img: "shop-9.jpg",
    },
  ];

  return (
    <div className="product-container">
      {productData.map((product, key) => {
        return (
          <div className="mx-5 p-3 product-card" key={key}>
            <div className="product-image-container">
              <img
                src={require("../../assets/images/shop/" + product.img)}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="product-info">
              <h5>
                <a href="#">{product.pName}</a>
                <p className="product-price">${product.price}</p>
                <div className="product-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
