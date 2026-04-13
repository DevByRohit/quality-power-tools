import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../../Data/productsData";
import "./ProductDetailPage.css";
import { FaArrowLeftLong } from "react-icons/fa6";

function ProductDetailPage() {
  const { category, productSlug } = useParams();

  const product = PRODUCTS.find(
    (p) => p.category === category && p.slug === productSlug,
  );

  const [activeImage, setActiveImage] = useState(product?.images?.main || "");

  if (!product) {
    return (
      <div className="product-detail-page">
        <h2>Product not found</h2>
        <Link to={`/product/${category}`} className="back-btn">
          ← Back to Category
        </Link>
      </div>
    );
  }

  const renderKeyValueTable = (data) => (
    <table className="specs-table">
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <td className="spec-key">
              {key
                .toLowerCase()
                .split("_")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </td>
            <td className="spec-value">{String(value)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="product-detail-page">
      {/* ================= TOP SECTION ================= */}
      <div className="product-top">
        {/* IMAGE GALLERY */}
        <div className="product-image-box">
          <h1 className="product-title">{product.name}</h1>

          <img
            src={activeImage}
            alt={product.name}
            className="main-product-image"
          />

          <div className="thumbnail-list">
            {product.images?.gallery?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} ${index + 1}`}
                className={`thumbnail ${activeImage === img ? "active" : ""}`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>

        {/* SPECIFICATIONS */}
        <div className="product-specs-box">
          <h1 className="specs-tittle">Product Specifications</h1>
          {renderKeyValueTable(product.specifications)}
          <div className="product-buttons">
            <a
              href={`https://wa.me/919266685321?text=${encodeURIComponent(`Hello Qualitex Team, I am interested in the product: ${product.name}. Category: ${product.category} Please share more details, pricing, and availability. Thank you.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="enquiry-btn"
            >
              Enquiry on WhatsApp
            </a>

            <Link to="/contact-us" className="contact-btn">
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* ================= ABOUT & PACKAGE ================= */}
      <div className="product-middle">
        {product.aboutThisItem?.length > 0 && (
          <div className="product-about">
            <h3>About this item</h3>
            <ul>
              {product.aboutThisItem.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {product.packageContents?.length > 0 && (
          <div className="product-package">
            <h3>Package Contents</h3>
            <ul>
              {product.packageContents.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* ================= EXTENDED SECTIONS ================= */}

      {product.performance && (
        <section className="product-extra-section">
          <h3>Performance</h3>
          {renderKeyValueTable(product.performance)}
        </section>
      )}

      {product.airflowSystem && (
        <section className="product-extra-section">
          <h3>Airflow System</h3>
          {renderKeyValueTable(product.airflowSystem)}
        </section>
      )}

      {product.heatingSystem && (
        <section className="product-extra-section">
          <h3>Heating System</h3>
          {renderKeyValueTable(product.heatingSystem)}
        </section>
      )}

      {product.mixingSystem && (
        <section className="product-extra-section">
          <h3>Mixing System</h3>
          {renderKeyValueTable(product.mixingSystem)}
        </section>
      )}

      {product.speedControl && (
        <section className="product-extra-section">
          <h3>Speed Control</h3>
          {renderKeyValueTable(product.speedControl)}
        </section>
      )}

      {product.temperatureControl && (
        <section className="product-extra-section">
          <h3>Temperature Control</h3>
          {renderKeyValueTable(product.temperatureControl)}
        </section>
      )}

      {product.coolingAndSafety && (
        <section className="product-extra-section">
          <h3>Cooling & Safety</h3>
          {renderKeyValueTable(product.coolingAndSafety)}
        </section>
      )}

      {product.usageApplications?.length > 0 && (
        <section className="product-extra-section">
          <h3>Applications</h3>
          <ul>
            {product.usageApplications.map((use, index) => (
              <li key={index}>{use}</li>
            ))}
          </ul>
        </section>
      )}

      {/* {product.packingInformation && (
        <section className="product-extra-section">
          <h3>Packing Information</h3>

          {product.packingInformation.singlePieceBox && (
            <>
              <h4>Single Piece Box</h4>
              {renderKeyValueTable(product.packingInformation.singlePieceBox)}
            </>
          )}

          {product.packingInformation.masterCarton && (
            <>
              <h4>Master Carton</h4>
              {renderKeyValueTable(product.packingInformation.masterCarton)}
            </>
          )}
        </section>
      )} */}
      {product.packingInformation && (
        <section className="product-extra-section">
          <h3 className="packing-title">Packing Information</h3>

          <div className="packing-container">
            {/* LEFT SIDE - DETAILS */}
            <div className="packing-details">
              {product.packingInformation.singlePieceBox && (
                <div className="packing-card">
                  <h4>Single Piece Box</h4>
                  {renderKeyValueTable(
                    product.packingInformation.singlePieceBox,
                  )}
                </div>
              )}

              {product.packingInformation.masterCarton && (
                <div className="packing-card">
                  <h4>Master Carton</h4>
                  {renderKeyValueTable(product.packingInformation.masterCarton)}
                </div>
              )}
            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div className="packing-image-wrapper">
              {product.packingInformation.image && (
                <img
                  src={product.packingInformation.image}
                  alt={`${product.name} Packing`}
                  className="packing-image"
                />
              )}
            </div>
          </div>
        </section>
      )}

      {/* ================= DESCRIPTION ================= */}
      <div className="product-description">
        <h3>Description</h3>
        <p>{product.longDescription}</p>
      </div>

      {/* ================= ACTIONS ================= */}
      <div className="product-actions">
        <Link to={`/product/${category}`} className="back-btn">
          <FaArrowLeftLong />
          Back to Category
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailPage;
