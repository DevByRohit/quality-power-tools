import HeaderCarousel from "../Header Carousel/HeaderCarousel";
import About from "../About/About";
import ProductCarousel from "../Product Carousel/ProductCarousel";
import Stats from "../Stats/Stats";
import GoogleMap from "../Google Map/GoogleMap";

export default function Home() {
  return (
    <>
      <HeaderCarousel></HeaderCarousel>
      <About></About>
      <ProductCarousel></ProductCarousel>
      <Stats></Stats>
      <GoogleMap></GoogleMap>
    </>
  );
}
