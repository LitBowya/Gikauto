import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import WhyUs from "../../components/WhyUs/WhyUs";
import CarDeals from "../../components/CarDeals/CarDeals";

const Home = () => {
  return (
    <div className="home">
      <Slider type="Header" />
      
      <Categories />

      <CarDeals />

      <FeaturedProducts type="Lubricants" />

      <FeaturedProducts type="Belts" />

      <FeaturedProducts type="Battery" />

      <FeaturedProducts type="Filters" />
      <WhyUs />
    </div>
  );
};

export default Home;
