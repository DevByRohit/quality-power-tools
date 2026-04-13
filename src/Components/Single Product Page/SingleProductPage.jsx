import { useParams, Link } from "react-router-dom";
import { PRODUCTS_BY_CATEGORY } from "../../Data/productsData";
import { useQuickView } from "../../Context/QuickViewContext";
import "./SingleProductPage.css";

import heroBlower from "../../assets/qualitex-blowers.jpg";
import heroHeatGun from "../../assets/qualitex-heat-gun.jpg";
import heroPaintMixer from "../../assets/qualitex-paint-mixer.jpg";

const CATEGORY_META = {
  blowers: {
    heroImage: heroBlower,
    description:
      "Qualitex electric blowers are engineered for powerful, efficient, and reliable air delivery across a wide range of cleaning and maintenance applications. Designed for both professional and industrial use, these blowers deliver high air volume with consistent performance, making them ideal for dust removal, workshop cleaning, machinery maintenance, and surface drying. Built with durable housings and precision-balanced motors, Qualitex blowers ensure long operational life with minimal vibration and noise. The ergonomic design allows comfortable handling during extended use, while compact construction makes them easy to carry and store. Variable-speed models provide greater control for different cleaning requirements, from light dust removal to heavy-duty industrial cleaning. Whether used in manufacturing units, service centers, workshops, or commercial facilities, Qualitex blowers combine power, efficiency, and reliability to deliver outstanding results every time.",
  },
  "heat-gun": {
    heroImage: heroHeatGun,
    description:
      "Qualitex heat guns are designed for precision heating applications that demand control, safety, and durability. Suitable for professional workshops, electrical maintenance, fabrication, and industrial use, these heat guns deliver consistent heat output for tasks such as paint removal, plastic bending, shrink wrapping, adhesive curing, and surface drying. Equipped with powerful heating elements and optimized airflow systems, Qualitex heat guns ensure fast heating and uniform temperature distribution. Dual and variable temperature controls allow users to adjust heat levels according to application requirements, improving efficiency while preventing material damage. With robust construction, ergonomic grip design, and enhanced thermal protection, Qualitex heat guns offer safe and reliable operation even during prolonged usage. They are built to perform in demanding environments while maintaining precision and user comfort.",
  },
  "paint-mixer": {
    heroImage: heroPaintMixer,
    description:
      "Qualitex paint mixers are built for heavy-duty mixing applications where consistency and power are essential. Designed to handle paint, cement, adhesives, coatings, and construction materials, these mixers deliver uniform blending for professional and industrial environments. Powered by high-torque motors, Qualitex mixers ensure smooth and efficient mixing even with thick and dense materials. The rugged gearbox and reinforced construction provide durability and stability during operation, reducing strain and improving control. Ergonomic handles allow firm grip and balanced operation, making extended mixing tasks comfortable and efficient. Ideal for construction sites, workshops, and industrial applications, Qualitex paint mixers are engineered to deliver reliable performance, durability, and consistent results for demanding mixing requirements. ",
  },
};

function SingleProductPage() {
  const { category } = useParams();
  const { openQuickView } = useQuickView();

  const categoryData = CATEGORY_META[category] || CATEGORY_META["blowers"];

  const products = PRODUCTS_BY_CATEGORY[category] || [];

  if (!products.length) {
    return (
      <div className="single-product-page">
        <h2>Category not found</h2>
        <Link to="/product" className="sp-back-btn">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="single-product-page">
      {/* ================= HERO SECTION ================= */}
      <section
        className="sp-hero-header"
        style={{
          backgroundImage: `url(${categoryData.heroImage})`,
        }}
      >
        <div className="sp-hero-overlay">
          <div className="sp-hero-content">
            <h1 className="sp-hero-title">
              <span className="sp-highlight">Qualitex Power Tools</span>
            </h1>

            <div className="sp-hero-divider"></div>

            <p className="sp-hero-subtitle">PRECISION • POWER • PERFORMANCE</p>

            <p className="sp-hero-subtitle">48+ Years Of Experience</p>

            <button
              className="sp-hero-button"
              onClick={() =>
                document
                  .querySelector(".single-product-list")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore All Products
            </button>
          </div>

          <h1 className="product-heading">
            <span>QUALITEX</span> {""}
            {category.replace("-", " ").toUpperCase()}
          </h1>
        </div>
      </section>

      {/* ================= CATEGORY TITLE ================= */}
      <div className="category-tittle">
        <h2 className="single-product-title">
          <span>QUALITEX</span> {""}
          {category.replace("-", " ").toUpperCase()}
        </h2>

        <p className="single-product-description">{categoryData.description}</p>
      </div>

      {/* ================= PRODUCTS GRID ================= */}
      <div className="single-product-list">
        {products.map((item) => (
          <div key={item.id} className="single-product-card">
            <img src={item.images?.main} alt={item.name} />

            <div className="card-meta-data">
              <h3 className="product-name">{item.name}</h3>
              <p className="product-shortdescription">
                {item.shortDescription}
              </p>

              <div className="single-page-btn-container">
                <button
                  className="spcard-cta-action secondary"
                  onClick={() => openQuickView(item)}
                >
                  Quick View
                </button>

                <Link
                  to={`/product/${category}/${item.slug}`}
                  className="spcard-cta-action primary"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleProductPage;
