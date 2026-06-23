// import img1 from "../assets/img1.png" 
// import img2 from "../assets/img2.png"
import {useState, useEffect} from "react"
import { heroImage } from "../assets/data/imagedata.js";





function HeroSection(){ 
const[currentImage, setCurrentImage]=useState(0);
useEffect(()=>{
    const interval=setInterval(() => {
        setCurrentImage((prev)=>
            prev===heroImage.length-1? 0 : prev+1
        );
    }, 3000);
    return ()=> clearInterval(interval);
},[])

  return( 
    /* PC: h-[300px] flex (row). Mobile: h-auto flex-col */
    <div className="w-full h-auto md:h-[300px] flex flex-col md:flex-row bg-blue-300 overflow-hidden"> 
      
      {/* TEXT CONTAINER */}
      {/* PC: ml-40 mt-12. Mobile: Centered padding, mt-8 */}
      <div className="flex-1 flex flex-col px-6 py-6 md:px-0 md:py-0 md:ml-40 md:mt-12">
         <h2 className="font-bold">NEW SEASON</h2>
         <h1 className="text-3xl font-bold mt-4 leading-none">Elevate your Style <br /> Every day</h1>
         
         <p className="text-sm mt-3">Discover modern essentials crafted for <br className="hidden md:block" /> comfort, quality and timeless style.</p>
         
         <div className="mt-5 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button className="bg-black border-black border-2  text-white rounded-[2px] p-1 mr-3 md:mb-0 hover:bg-white hover:text-black">
              SHOP NOW
            </button>
            <button className="border-black border-2 rounded-[2px] p-1">
              EXPLORE COLLECTION
            </button>
         </div>
      </div>

      {/* IMAGE CONTAINER WRAPPER */}
      {/* PC: w-[450px] h-[300px]. Mobile: w-full h-[250px] to make room on phones */}
      <div className="w-full md:w-[450px] h-[250px] md:h-[300px] flex justify-center items-center md:mr-5 overflow-hidden pb-6 md:pb-0">
         
         {/* INNER IMAGE BOX (LOCKED HEIGHT FOR MOBILE) */}
         {/* PC: w-[300px] h-full. Mobile: Forced h-[220px] and object-contain so heights don't jump */}
         <div className="w-[300px] h-[220px] md:h-full flex justify-center items-center">
           <img 
            key={currentImage}
            src={heroImage[currentImage]} 
            alt="hero" 
            /* object-contain ensures transparent images don't distort or clip across screens */
            className="w-full h-full object-contain" 
          /> 
         </div>

      </div>
    </div> 
  ) 
} 

export default HeroSection;
