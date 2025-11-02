import React, { useMemo } from "react";

export default function Filters({ products = [] }) {
  const categories = useMemo(() => {
    const s = new Set(products.map((p) => p.category).filter(Boolean));
    return ["all", ...Array.from(s)];
  }, [products]);

  return (
    <div className="filters">
      <div className="filter-block">
        <label htmlFor="category">Category</label>
        <select id="category" aria-label="Filter by category" defaultValue="all">
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-block">
        <label htmlFor="maxPrice">Max Price</label>
        <input id="maxPrice" type="number" placeholder="No limit" aria-label="Maximum price" />
      </div>
    </div>
  );
}
