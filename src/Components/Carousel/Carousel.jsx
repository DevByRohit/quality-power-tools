import { useEffect, useRef, useState } from "react";
import "./Carousel.css";

function Carousel({ children }) {
  // console.log(children);

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselBoxRef = useRef(null);
  const intervalRef = useRef(null);
  const isMountedRef = useRef(false);

  // configurable timing
  const AUTO_INTERVAL_MS = 3000;

  // convert children to stable array
  const slidesArray = Array.isArray(children)
    ? children
    : Array.from(children ? [children] : []);

  useEffect(() => {
    // ensure we run initialization after first paint
    if (!carouselBoxRef.current) return;

    const { slides } = getSlidesInfo();
    // mark the first slide active
    [...slides].forEach((slide, i) => {
      slide.setAttribute("data-active", i === 0 ? "true" : "false");
      slide.setAttribute("aria-hidden", i === 0 ? undefined : "true");
      slide.setAttribute("id", `q-slide-${i}`);
    });

    // start auto slider
    startSlider();

    // cleanup on unmount
    return () => {
      stopSlider();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // helper: get slides and count
  function getSlidesInfo() {
    const carouselBox = carouselBoxRef.current;
    const slides = carouselBox ? carouselBox.children : [];
    const count = slides.length;
    return { slides, count };
  }

  // start the interval (guarded to avoid duplicates)
  function startSlider() {
    if (intervalRef.current) return; // already running
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const { count } = getSlidesInfo();
        const newIndex = prev + 1 >= count ? 0 : prev + 1;
        setActiveSlide(newIndex);
        return newIndex;
      });
    }, AUTO_INTERVAL_MS);
  }

  // stop interval
  function stopSlider() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  // set active slide by index (updates DOM attributes)
  function setActiveSlide(newIndex) {
    const { slides } = getSlidesInfo();
    [...slides].forEach((slide, index) => {
      slide.setAttribute("data-active", index === newIndex ? "true" : "false");
      slide.setAttribute(
        "aria-hidden",
        index === newIndex ? undefined : "true"
      );
    });
  }

  // Prev handler
  function handlePrevious() {
    stopSlider();
    const { count } = getSlidesInfo();
    const newIndex = currentIndex === 0 ? count - 1 : currentIndex - 1;
    setActiveSlide(newIndex);
    setCurrentIndex(newIndex);
    startSlider();
  }

  // Next handler
  function handleNext() {
    stopSlider();
    const { count } = getSlidesInfo();
    const newIndex = currentIndex === count - 1 ? 0 : currentIndex + 1;
    setActiveSlide(newIndex);
    setCurrentIndex(newIndex);
    startSlider();
  }

  // Stepper click
  function handleStepperClick(newIndex) {
    return () => {
      stopSlider();
      setActiveSlide(newIndex);
      setCurrentIndex(newIndex);
      startSlider();
    };
  }

  // pause on mouse enter
  function handleMouseEnter() {
    stopSlider();
  }

  function handleMouseLeave() {
    startSlider();
  }

  return (
    <div className="q-carousel" aria-roledescription="carousel">
      <div className="q-carousel__debug" aria-hidden="true">
        {currentIndex}
      </div>

      <div
        className="q-carousel__viewport"
        ref={carouselBoxRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="Sliding images"
      >
        {slidesArray.map((child, i) => {
          // if user passed plain <img /> elements, we wrap them in a container
          // but if they passed custom slide elements we render them as-is
          return (
            <div
              key={i}
              className="q-carousel__slide"
              role="group"
              aria-roledescription="slide"
              aria-hidden={i === currentIndex ? undefined : "true"}
              id={`q-slide-${i}`}
              data-active={i === 0 ? "true" : "false"}
            >
              {child}
            </div>
          );
        })}
      </div>

      <div className="q-carousel__controls">
        <button
          className="q-carousel__btn q-carousel__btn--prev"
          onClick={handlePrevious}
          aria-label="Previous slide"
        >
          Prev
        </button>

        <button
          className="q-carousel__btn q-carousel__btn--next"
          onClick={handleNext}
          aria-label="Next slide"
        >
          Next
        </button>
      </div>

      <div className="q-carousel__stepper" aria-hidden="false">
        {slidesArray.map((_, index) => (
          <button
            key={index}
            className={`q-carousel__step ${
              index === currentIndex ? "is-active" : ""
            }`}
            onClick={handleStepperClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-pressed={index === currentIndex}
          >
            <span className="q-carousel__step-label">{index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
