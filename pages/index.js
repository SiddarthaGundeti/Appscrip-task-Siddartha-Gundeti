import Head from "next/head";
import Header from "../components/Header";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

export default function Home({ products }) {
  const title = "Design Task — Product Listing Page (PLP) — Siddartha Gundeti";
  const description =
    "Responsive Product Listing Page built with Next.js (SSR). Search, filter and view products — SEO ready.";

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PLP — FakeStoreAPI",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: `https://example.com/products/${p.id}`,
    })),
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      </Head>

      <Header />

      <main className="container" role="main">
        <aside className="sidebar" aria-label="Product filters">
          <h2>Filters</h2>
          <Filters products={products} />
        </aside>

        <section className="content" aria-labelledby="products-heading">
          <h1 id="products-heading">Products</h1>
          <p className="muted">Server-side rendered demo using FakeStoreAPI.</p>
          <ProductGrid products={products} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    return { props: { products } };
  } catch (err) {
    console.error("SSR fetch error:", err);
    return { props: { products: [] } };
  }
}
