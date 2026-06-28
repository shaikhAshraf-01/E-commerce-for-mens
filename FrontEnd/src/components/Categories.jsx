import { categoryimages } from "../assets/data/imagedata.js";
import HOODIE from "../assets/categoryimages/hoodie1.png";
import Tshirt from "../assets/categoryimages/tshirt.png";



function Categories() {
  return (
    
      <div className="w-full px-4 md:px-10 py-5">
       
          <div className="mb-4">
            <span className="font-bold text-base md:text-lg flex-1">
              Shop By category
            </span>
          </div>

          {/* SLIDER CONTAINER */}
          <div
            className="flex gap-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory scroll-smooth pb-3"
          >
            {categoryimages.map((item) => (
              <div
                
                key={item.id}
                className="group cursor-pointer flex flex-col items-center flex-shrink-0 w-[42%] sm:w-[30%] md:w-[23%] lg:w-[calc((100%-64px)/5)] snap-start"
              >
                {/* 1. Image Wrap Box (Kept clean for image only) */}
                <div className="w-full aspect-square rounded-sm overflow-hidden flex justify-center items-center  bg-purple-300">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* 2. Fixed: Moved Product Name here at the absolute bottom */}
                <h4 className="mt-2 text-xs md:text-sm font-semibold tracking-wide text-gray-800 group-hover:text-black text-center w-full truncate px-1">
                  {item.name}
                </h4>
              </div>
            ))}
          </div>
       
      </div>
   
  );
}

export default Categories;
