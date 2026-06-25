import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import Promotions from "../components/Promotions";

function Home(){
    return(
        <div className="w-full  ">
  
  <HeroSection/>
  <Categories/>
  <Promotions/>
  </div>
    )
}
export default Home;