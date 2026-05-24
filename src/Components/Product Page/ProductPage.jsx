import React from "react";
import "./ProductPage.css";
import ReusableCarousel from "../Reusable Carousel/ReusableCarousel.jsx";
import { PRODUCTS_BY_CATEGORY } from "../../Data/productsData.js";

const ProductsPage = () => {
  return (
    <main className="products-page">
      {/* ================= HERO SECTION ================= */}
      <section className="hero-header">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="highlight">QUALITEX POWER TOOLS</span>
            </h1>

            <div className="hero-divider"></div>

            <p className="hero-subtitle">Precision • Power • Performance</p>

            <p className="hero-subtitle">50+ Years Of Experience</p>

            <button
              className="hero-button"
              onClick={() =>
                document
                  .querySelector(".products-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              EXPLORE PRODUCTS
            </button>
          </div>

          <h1 className="product-page-heading">QUALITEX PRODUCTS</h1>
        </div>
      </section>

      {/* ================= DESCRIPTION ================= */}
      <section className="products-description">
        <div className="products-description__content">
          <h2>Premium Qualitex Power Tools</h2>
          <p>
            Explore our comprehensive range of Qualitex Power Tools engineered
            for durability, efficiency, and high-performance applications.
            Backed by over four decades of industry expertise, our products are
            designed to meet the evolving demands of professionals and
            industrial users.
          </p>

          <p>
            Our portfolio includes high-powered Air Blowers,
            precision-engineered Heat Guns, robust Electric Mixers, premium
            Armatures, Field Coils, and essential motor components. Each product
            undergoes rigorous quality testing to ensure long-lasting
            performance, safety, and operational efficiency.
          </p>

          <p>
            By combining advanced manufacturing technology with customer-driven
            innovation, Qualitex delivers reliable and cost-effective solutions
            trusted across domestic and global markets.
          </p>
        </div>
      </section>

      {/* ================= AIR BLOWER ================= */}
      <section className="products-section">
        <ReusableCarousel
          items={PRODUCTS_BY_CATEGORY.blower}
          heading="Air Blower"
          category="blower"
          viewMoreTo="/product/blower"
        />
      </section>

      {/* ================= HEAT GUN ================= */}
      <section className="products-section">
        <ReusableCarousel
          items={PRODUCTS_BY_CATEGORY["heat-gun"]}
          heading="Heat Gun"
          category="heat-gun"
          viewMoreTo="/product/heat-gun"
        />
      </section>

      {/* ================= PAINT MIXER ================= */}
      <section className="products-section">
        <ReusableCarousel
          items={PRODUCTS_BY_CATEGORY["paint-mixer"]}
          heading="Paint Mixer"
          category="paint-mixer"
          viewMoreTo="/product/paint-mixer"
        />
      </section>

      {/* ================= Angle Grinder ================= */}
      <section className="products-section">
        <ReusableCarousel
          items={PRODUCTS_BY_CATEGORY["angle-grinder"]}
          heading="Angle Grinder"
          category="angle-grinder"
          viewMoreTo="/product/angle-grinder"
        />
      </section>

      {/* ================= Drill Machine ================= */}
      <section className="products-section">
        <ReusableCarousel
          items={PRODUCTS_BY_CATEGORY["drill-machine"]}
          heading="Drill Machine"
          category="drill-machine"
          viewMoreTo="/product/drill-machine"
        />
      </section>

      {/* ================= Marble Cutter ================= */}
      <section className="products-section">
        <ReusableCarousel
          items={PRODUCTS_BY_CATEGORY["marble-cutter"]}
          heading="Marble Cutter"
          category="marble-cutter"
          viewMoreTo="/product/marble-cutter"
        />
      </section>
    </main>
  );
};

export default ProductsPage;
