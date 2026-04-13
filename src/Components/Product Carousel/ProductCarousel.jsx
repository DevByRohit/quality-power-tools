// --------- ProductCarousel.jsx ---------
import React from "react";
import ReusableCarousel from "../Reusable Carousel/ReusableCarousel";
import { PRODUCTS_BY_CATEGORY } from "../../Data/productsData.js";

/**
 * Interleave products category-wise:
 * blower → heat-gun → paint-mixer → repeat
 */
function getMixedProducts(productsByCategory) {
  const categories = Object.keys(productsByCategory);

  const maxLength = Math.max(
    ...categories.map((cat) => productsByCategory[cat].length)
  );

  const mixed = [];

  for (let i = 0; i < maxLength; i++) {
    for (const category of categories) {
      const item = productsByCategory[category][i];
      if (item) {
        mixed.push({
          ...item,
          _category: category,
        });
      }
    }
  }

  return mixed;
}

const ProductCarousel = () => {
  const mixedProducts = getMixedProducts(PRODUCTS_BY_CATEGORY);

  return (
    <section className="mix-products-section">
      <ReusableCarousel
        items={mixedProducts}
        heading="Products"
        viewMoreTo="/product"
      />
    </section>
  );
};

export default ProductCarousel;
