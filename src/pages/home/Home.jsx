
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import WhyUs from '../../components/WhyUs/WhyUs';
import CarDeals from '../../components/CarDeals/CarDeals'


const Home = () => {
  return (
    <div className="home">
      <Slider />
      <CarDeals />
      <FeaturedProducts type="Featured" />
      <FeaturedProducts type="Trending" />
      <WhyUs />
    </div>
  );
}

export default Home