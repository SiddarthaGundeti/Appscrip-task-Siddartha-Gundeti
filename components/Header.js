import React from "react";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo">YourStore</div>
        <nav className="nav" aria-label="Main navigation">
          <a href="#products">Products</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}
