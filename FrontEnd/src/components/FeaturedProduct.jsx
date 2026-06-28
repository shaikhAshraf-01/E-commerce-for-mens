import { FeaturedProductImages } from "../assets/data/imagedata";
import { BiRupee, BiCart,BiReset,  BiLockAlt, BiHeadphone } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";

function FeaturedProduct() {
  return (
    <div className="w-full px-4 md:px-10 py-5">
      <div>
        <h4 className="text-sm md:text-xl font-black mb-4 tracking-wide text-gray-900">
          FEATURED PRODUCTS
        </h4>
      </div>

      {/* 1. FIXED: Added 'grid' class and responsive gap spacing */}
      <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
        {FeaturedProductImages.map((item) => (
          <div
            key={item.id}
            /* 2. FIXED: Removed flat percentages so the grid controls item sizing */
            className="group border border-gray-200 hover:border-gray-400 rounded-md overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col items-center w-full"
          >
            {/* Image Container */}
            <div className="w-full border-b-2 border-l-2 border-gray-300 shadow-[-4px_0_6px_-1px_rgba(0,0,0,0.1)] aspect-square overflow-hidden flex justify-center items-center bg-gray-50 p-2">
              {" "}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Details Wrapper */}
            <div className="p-3 w-full flex flex-col flex-grow">
              {/* Product Name */}
              <h4 className="text-xs md:text-sm font-semibold tracking-wide text-gray-800 group-hover:text-black text-left w-full truncate">
                {item.name}
              </h4>

              {/* Price Container */}
              <div className="mt-1 flex items-center justify-start text-sm md:text-base font-bold text-gray-900 w-full">
                <BiRupee className="inline-block align-middle shrink-0 -ml-1 text-lg md:text-xl" />
                <span className="leading-none">{item.price}</span>
              </div>

              {/* 3. FIXED: Button full-width alignment and micro-gap */}
              <div className="mt-auto pt-3 w-full">
                <button className="w-full flex items-center justify-center gap-1 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-2 px-3 rounded text-xs md:text-sm transition-colors duration-200">
                  <BiCart className="text-base md:text-lg shrink-0" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
   <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:mt-6 mt-4 px-3">
  {/* Free Shipping */}
  <div className="flex flex-col items-center text-center justify-center border-2 border-purple-300 bg-purple-200 p-3 rounded-lg">
    <div className="text-2xl text-purple-900 mb-1">
      <FaTruck />
    </div>
    <div>
      <h3 className="font-bold text-xs md:text-sm leading-tight">Free Shipping</h3>
      <p className="text-[10px] md:text-xs text-gray-600 leading-normal mt-0.5">Above 499</p>
    </div>
  </div>

  {/* Easy Return */}
  <div className="flex flex-col items-center text-center justify-center border-2 border-purple-300 bg-purple-200 p-3 rounded-lg">
    <div className="text-2xl text-purple-900 mb-1">
      <BiReset />
    </div>
    <div>
      <h3 className="font-bold text-xs md:text-sm leading-tight">Easy Return</h3>
      <p className="text-[10px] md:text-xs text-gray-600 leading-normal mt-0.5">30 days policy</p>
    </div>
  </div>

  {/* Secure Payment */}
  <div className="flex flex-col items-center text-center justify-center border-2 border-purple-300 bg-purple-200 p-3 rounded-lg">
    <div className="text-2xl text-purple-900 mb-1">
      <BiLockAlt />
    </div>
    <div>
      <h3 className="font-bold text-xs md:text-sm leading-tight">Secure Payment</h3>
      <p className="text-[10px] md:text-xs text-gray-600 leading-normal mt-0.5">100% Protected</p>
    </div>
  </div>

  {/* 24/7 Support */}
  <div className="flex flex-col items-center text-center justify-center border-2 border-purple-300 bg-purple-200 p-3 rounded-lg">
    <div className="text-2xl text-purple-900 mb-1">
      <BiHeadphone />
    </div>
    <div>
      <h3 className="font-bold text-xs md:text-sm leading-tight">24/7 Support</h3>
      <p className="text-[10px] md:text-xs text-gray-600 leading-normal mt-0.5">Always available</p>
    </div>
  </div>
</div>


    </div>
  );
}

export default FeaturedProduct;
