import {useState, useEffect} from "react"
import { heroImage } from "../assets/data/imagedata.js";
import {motion} from "framer-motion"

const slideUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

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
    <motion.div 
    variants={slideUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true,  margin:"-100px" }}
    >
    <div className="w-full h-auto md:h-auto flex flex-col md:flex-row bg-blue-300 overflow-hidden"> 
      
      {/* TEXT CONTAINER */}
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
      <div className="w-full md:w-[450px] h-auto md:h-[300px] flex justify-center items-center md:mr-5 overflow-hidden  md:pb-0">
         
         {/* INNER IMAGE BOX (LOCKED HEIGHT FOR MOBILE) */}
         <div className="w-[300px] h-[220px] md:h-full flex justify-center items-center">
           <img 
            key={currentImage}
            src={heroImage[currentImage]} 
            alt="hero" 
            className="w-full h-full object-contain" 
          /> 
         </div>

      </div>
    </div> 
    </motion.div>
  ) 
} 

export default HeroSection;