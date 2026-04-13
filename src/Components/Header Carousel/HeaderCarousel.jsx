import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HeaderCarousel.css";
import { FaArrowRightLong } from "react-icons/fa6";

// Import Product Images
import Product_1 from "../../assets/Carousel Image/product-1.jpg";
import Product_2 from "../../assets/Carousel Image/product-2.jpg";
import Product_3 from "../../assets/Carousel Image/product-3.jpg";
import Product_4 from "../../assets/Carousel Image/product-4.jpg";
import Product_5 from "../../assets/Carousel Image/product-5.jpg";
import Product_6 from "../../assets/Carousel Image/product-6.jpg";
import { NavLink } from "react-router-dom";
import { FaCloudDownloadAlt } from "react-icons/fa";

const slides = [
  {
    title: "QUALITEX POWER TOOLS",
    name: "THUNDER BLOWER QB 80",
    des: "High-power thunder blower built for heavy-duty and industrial grade cleaning with maximum airflow performance.",
    img: Product_1,
  },
  {
    title: "QUALITEX POWER TOOLS",
    name: "ELECTRIC BLOWER VB 40",
    des: "Variable speed electric blower offering precise airflow control for electronics, machinery, and professional cleaning tasks.",
    img: Product_2,
  },
  {
    title: "QUALITEX POWER TOOLS",
    name: "ELECTRIC BLOWER QB 40",
    des: "Compact single-speed electric blower designed for efficient dust removal in homes and industrial environments.",
    img: Product_3,
  },
  {
    title: "QUALITEX POWER TOOLS",
    name: "HOT AIR GUN QHG1800",
    des: "Dual-temperature hot air gun ideal for paint stripping, shrink wrapping, plastic bending, and industrial applications.",
    img: Product_4,
  },
  {
    title: "QUALITEX POWER TOOLS",
    name: "HOT AIR GUN QVHG2000",
    des: "Variable temperature hot air gun with wide heat range for precision heating, shaping, and professional use.",
    img: Product_5,
  },
  {
    title: "QUALITEX POWER TOOLS",
    name: "ELECTRIC PAINT MIXER QPM800",
    des: "Heavy-duty electric mixer engineered for paint, cement, and construction material mixing with consistent performance.",
    img: Product_6,
  },
];

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

export default function HeaderCarousel() {
  return (
    <section className="hero-carousel">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        arrows
        showDots
        swipeable
        draggable
        pauseOnHover
        containerClass="hero-carousel__container"
        itemClass="hero-carousel__item"
      >
        {slides.map((item, index) => (
          <div
            key={index}
            className="hero-slide"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="hero-slide__overlay">
              <div className="hero-slide__content">
                <span className="hero-slide__title">{item.title}</span>
                <h2 className="hero-slide__name">{item.name}</h2>
                <p className="hero-slide__desc">{item.des}</p>

                <div className="hero-slide__buttons">
                  <a
                    href="/qualitex-catalogue.pdf"
                    download
                    className="btn btn-14 btn-catalog"
                  >
                    Catalogue
                    <FaCloudDownloadAlt
                      size={25}
                      className="btn-icon btn-icon--download"
                    />
                  </a>

                  <NavLink to="/product">
                    <a className="btn btn-14 btn-view-more">
                      View More
                      <FaArrowRightLong
                        size={25}
                        className="btn-icon btn-icon--arrow"
                      />
                    </a>
                   
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
