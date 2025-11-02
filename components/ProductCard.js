import React from "react";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <article className="product-card" role="listitem" aria-label={product.title}>
      <div className="card-image">
        <Image src={product.image} alt={product.title} width={300} height={300} objectFit="contain" />
      </div>
      <h3 className="card-title">{product.title}</h3>
      <p className="card-price">₹{(product.price * 80).toFixed(0)}</p>
      <p className="card-desc">{product.description.slice(0, 90)}...</p>
      <div className="card-actions">
        <button className="btn">Add to cart</button>
        <button className="btn ghost">View</button>
      </div>
    </article>
  );
}
