
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/Categories/Categories'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import WhyUs from '../../components/WhyUs/WhyUs';
import CarDeals from '../../components/CarDeals/CarDeals'

const Home = () => {
  return (
    <div className="home">
      <Slider type="Header"/>
      <CarDeals />
      <Categories />
      <Slider type="Lubricant"/>
      <FeaturedProducts type="Lubricants" />
      <Slider type="Belts"/>
      <FeaturedProducts type="Belts" />
      <Slider type="Battery"/>
      <FeaturedProducts type="Battery" />
      <Slider type="Filters"/>
      <FeaturedProducts type="Filters" />
      <WhyUs />
    </div>
  );
}

export default Home