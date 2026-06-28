import Carousel from "../components/carousel";
import ReviewsSlider from "../components/reviewsslider";
import SareeSection from "../components/sareesection";

const Home = () => {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Carousel />
        <SareeSection />
        <ReviewsSlider />
      </div>
    </div>
  );
};

export default Home;