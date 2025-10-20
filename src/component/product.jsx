import React from "react";

export default function Products() {
  return (
    <section id="products" className="products-section align-center m-4 ">
      <h2 className="section-title">Our Products</h2>

      <div className="product-container d-flex align-center ">
        <div className="product-card col-3 lg-3 gap-2 align-center ">
          <img
            src="/products/dell.webp"
            alt="Dell Laptop"
            className="product-img"
          />
          <h3 className="product-name ">DELL LE5470</h3>
          <p className="product-description">
            Core i7 with 500SSD and 16GB memory
          </p>
          <p className="product-price">
            Price: <span>₦350,000</span>  <br />
          </p>
                      <button className="btn-buy mb-4 ">BUY NOW </button>

        </div>
        <div className="product-card col-3 ">
          <img
            src="/products/elitebook.webp"
            alt="Dell Laptop"
            className="product-img"
          />
          <h3 className="product-name">HP ELITEBOOK</h3>
          <p className="product-description">
            Core i5 with 350SSD and 8GB memory
          </p>
          <p className="product-price">
            Price: <span>₦210,000</span>  <br />

          </p>
                      <button className="btn-buy mb-4 ">BUY NOW </button>

        </div>
        <div className="product-card col-3 ">
          <img
            src="/products/acer.webp"
            alt="Dell Laptop"
            className="product-img"
          />
          <h3 className="product-name">ACER ASPIRON</h3>
          <p className="product-description">
            Core i3 with 220SSD and 4GB memory
          </p>
          <p className="product-price">
            Price: <span>₦195,000</span>  <br />

          </p>
                      <button className="btn-buy mb-4 ">BUY NOW </button>

        </div>
        <div className="product-card col-3  ">
          <img
            src="/products/hp.webp"
            alt="Dell Laptop"
            className="product-img"
          />
          <h3 className="product-name">HP 650 </h3>
          <p className="product-description">
            Core i5 with 320SSD and 6GB memory
          </p>
          <p className="product-price">
            Price: <span>₦350,000</span>
            <br />
          </p>
                      <button className="btn-buy mb-4 ">BUY NOW </button>

        </div>
      </div>
      <a href="/moreproducts">
        <button className="  btn-more  border-primary "> SEE MORE PRODUCTS </button>

      </a>

     
    </section>
  );
}
