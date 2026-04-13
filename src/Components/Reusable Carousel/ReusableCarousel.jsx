import "./ReusableCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useQuickView } from "../../Context/QuickViewContext";

const Card = ({ item, category, onQuickView }) => {
  return (
    <article className="rcard" role="group" aria-label={item.title}>
      <div className="rcard__media">
        {/* <img src={item.image} alt={item.title} /> */}
        <img src={item.images?.main} alt={item.title} />
      </div>

      <div className="rcard__body">
        <h3 className="rcard__title">{item.name}</h3>
        <p className="rcard__desc">{item.shortDescription}</p>
        <div className="rcard__meta">
          {/* {item.price && <span className="rcard__price">₹{item.price}</span>} */}
          <button className="rcard__cta" onClick={() => onQuickView(item)}>
            Quick view
          </button>
          <Link to={`/product/${category}/${item.slug}`} className="rcard__cta">
            See more
          </Link>
          {/* <Link to={`/product/${category}/${item.slug}`}>
            <button className="rcard__cta">See more</button>
          </Link> */}
        </div>
      </div>
    </article>
  );
};

const ReusableCarousel = ({
  items = [],
  heading = "Our Products",
  responsive = null,
  category,
  viewMoreTo,
}) => {
  // Default responsive breakpoints
  const defaultResponsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  // Use custom responsive config if provided, otherwise use default
  const responsiveConfig = responsive || defaultResponsive;

  const { openQuickView } = useQuickView();

  // If no items provided, show a message
  if (!items.length) {
    return (
      <section className="reusable-carousel" aria-label="Product carousel">
        <h1 className="reusable-carousel__heading">{heading}</h1>
        <p style={{ textAlign: "center", padding: "20px", color: "#666" }}>
          No items to display
        </p>
      </section>
    );
  }

  return (
    <section className="reusable-carousel" aria-label="Product carousel">
      <div className="carousel-header">
        <h1 className="reusable-carousel__heading">{heading}</h1>
        {viewMoreTo && (
          <Link to={viewMoreTo} className="view-more outlined">
            View More <FaArrowRightLong size={22} />
          </Link>
        )}
      </div>

      <Carousel
        responsive={responsiveConfig}
        swipeable={true}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        containerClass="reusable-carousel__container"
        itemClass="reusable-carousel__item"
      >
        {items.map((item, index) => (
          <Card
            item={item}
            category={item._category || category}
            onQuickView={openQuickView}
          />
        ))}
      </Carousel>
    </section>
  );
};

export default ReusableCarousel;
