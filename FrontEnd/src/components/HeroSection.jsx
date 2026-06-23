import herosectionimg from "../assets/herosectionimg.png" 
import img2 from "../assets/img2.png"
import {useState, useEffect} from "react"

const images=[
    herosectionimg,
    img2
];
function HeroSection(){ 
const[currentImage, setCurrentImage]=useState(0);
useEffect(()=>{
    const interval=setInterval(() => {
        setCurrentImage((prev)=>
            prev===images.length-1? 0 : prev+1
        );
    }, 3000);
    return ()=> clearInterval(interval);
},[])
  return( 
    <div className="w-full h-[300px] flex  bg-blue-300"> 
      <div className="flex-1 flex flex-col ml-40 mt-12 ">
 <h2 className="font-bold">NEW SEASON</h2>
 <h1 className="text-3xl font-bold mt-4 leading-none">Elevate your Style <br /> Every day</h1>
 
 <p className="text-sm mt-3">Discover modern essentials crafted for <br /> comform, quality and timeless style.</p>
 <div className="mt-3">
<button className="bg-black border-black border-2 text-white rounded-[2px] p-1 mr-3">
  SHOP NOW
</button>

<button className="border-black border-2 rounded-[2px] p-1">
  EXPLORE COLLECTION
</button>

 </div>
      </div>
   <div className="w-[450px] h-[300px] flex-none  mr-5overflow-hidden">
  <img 
    src={images[currentImage]} 
    alt="hero" 
    className="w-full h-full object-fill" 
  /> 
</div>
    </div> 
  ) 
} 

export default HeroSection;
