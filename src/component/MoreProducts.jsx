import React from "react";

export default function MoreProducts() {
    const products = [
        {
            id: 1,
            name: "DELL Latitude E5470",
            price: "₦350,000",
            image: "/products/dell.webp",
        },
        {
            id: 2,
            name: "HP EliteBook 840",
            price: "₦280,000",
            image: "/products/hp1.jpg",
        },
        {
            id: 3,
            name: "MacBook Pro",
            price: "₦950,000",
            image: "/products/l.webp",
        },
        {
            id: 4,
            name: "Asus VivoBook",
            price: "₦400,000",
            image: "/products/l3.webp",
        },
        {
            id: 5,
            name: "Lenovo ThinkPad",
            price: "₦300,000",
            image: "/products/l4.webp",
        },
        {
            id: 6,
            name: "Acer Aspire ",
            price: "₦270,000",
            image: "/products/l5.webp",
        },
        {
            id: 7,
            name: "Acer Aspire 7",
            price: "₦270,000",
            image: "/products/l6.webp",
        },
        {
            id: 8,
            name: "Acer Aspire 7",
            price: "₦270,000",
            image: "/products/l7.jpg",
        },
        {
            id: 9,
            name: "Acer Aspire 7",
            price: "₦270,000",
            image: "/products/l8.jpg",

        },
        {
            id: 10,
            name: "Acer Aspire 7",
            price: "₦270,000",
            image: "/products/l9.jpg",

        },
        {
            id: 11,
            name: "Acer Aspire 7",
            price: "₦270,000",
            image: "/products/l10.jpg",
            image: "/products/l2.webp",
        },
        {
            id: 12,
            name: "Acer Aspire 7",
            price: "₦270,000",
            image: "/products/l11.webp",
        },
        {
            id: 13,
            name: "Acer Aspire 7",
            price: "₦270,000",
            image: "/products/l2.webp",
        },
        {
            id: 14,
            name: "Acer Aspire 7",
            price: "₦270,000",
            image: "/products/hp.webp",
        },
        {
            id: 15,
            name: "Acer Aspire 7",
            price: "₦270,000",
            image: "/products/acer.webp",
        },
        {
            id: 16,
            name: "Acer Aspire 7",
            price: "₦270,000",
            image: "/products/l.webp",
        },
        {
            id: 17,
            name: "Acer Aspire 7",
            price: "₦270,000",
            image: "/products/elitebook.webp",
        },
        {
            id: 18,
            name: "Acer Aspire 7",
            price: "₦270,000",
            image: "/products/dell.webp",
        },
        {
            id: 19,
            name: "Acer Aspire 7",
            price: "₦270,000",
            image: "/products/hp1.jpg",
        },
    ];

    return (
        <section id="products" className="products-section align-center m-4 ">
            <h2 className="section-title">Our Products</h2>
            <div className="product-grid d-flex">
                {products.map((product) => (
                    <div key={product.id} className="moreproduct-card">
                        <img src={product.image} alt={product.name} className="moreproduct-img" />
                        <h3 className="moreproduct-name">{product.name}</h3>
                        <p className="moreproduct-price">{product.price}</p>
                        <button className="btn-buy mb-4 ">BUY NOW </button>

                    </div>
                ))}
            </div>
        </section>
    );
}
