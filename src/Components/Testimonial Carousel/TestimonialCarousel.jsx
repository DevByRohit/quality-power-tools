import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./TestimonialCarousel.css";
import { FaQuoteLeft } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";

/* Dummy testimonial data */
const testimonials = [
  {
    name: "Sahil Shah",
    city: "Mumbai",
    rating: 5,
    review:
      "Outstanding products! Your Power Tools Armature, Electric Tools Armature, Cut off Machine Armature consistently surpass expectations.",
  },
  {
    name: "Harsh Panchal",
    city: "Gandhinagar",
    rating: 5,
    review:
      "Unparalleled excellence! Superior quality, unmatched reliability, and stellar performance.",
  },
  {
    name: "Rohit Mehta",
    city: "Delhi",
    rating: 4,
    review:
      "Reliable tools with consistent performance. We’ve been using XTRA POWER products for years and the quality has always met professional standards.",
  },
  {
    name: "Ankit Verma",
    city: "Pune",
    rating: 5,
    review:
      "Excellent build quality and long-lasting performance. The support team is also very responsive and helpful.",
  },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 680 }, items: 2 },
  mobile: { breakpoint: { max: 680, min: 0 }, items: 1 },
};

const Stars = ({ count }) => {
  return (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "star filled" : "star"}>
          <IoStarSharp />
        </span>
      ))}
    </div>
  );
};

export default function TestimonialCarousel() {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">What Our Clients Say</h2>

      <Carousel
        responsive={responsive}
        swipeable
        draggable
        infinite
        autoPlay
        autoPlaySpeed={5000}
        arrows
        containerClass="testimonial-carousel"
        itemClass="testimonial-item"
      >
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-text">{item.review}</p>

            <div className="testimonial-footer">
              <h4>{item.name}</h4>
              <span className="city">{item.city}</span>
              <Stars count={item.rating} />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
