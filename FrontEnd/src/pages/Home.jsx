import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import Promotions from "../components/Promotions";
import FeaturedProduct from "../components/FeaturedProduct";

function Home(){
    return(
        <div className="w-full  ">
  
  <HeroSection/>
  <Categories/>
  <Promotions/>
  <FeaturedProduct/>
  </div>
    )
}
export default Home;