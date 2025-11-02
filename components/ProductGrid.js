import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products = [] }) {
  if (!products.length) return <div className="empty">No products available.</div>;
  return (
    <div className="product-grid" role="list">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
