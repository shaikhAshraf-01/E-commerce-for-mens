import HOODIE from "../assets/categoryimages/hoodie1.png";
import Tshirt from "../assets/categoryimages/tshirt.png";

// Fixed: Isolated the missing variant configuration locally


function Promotions() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 px-4 md:px-10 mt-5"
    >
      {/* First Banner */}
      <div className="flex-1 bg-amber-200  rounded-[6px] flex justify-between items-center overflow-hidden min-h-[120px] md:min-h-[220px]">
        <div className="p-4 md:p-12 lg:p-16 flex-1 pr-2">
          <h2 className="text-[10px] md:text-sm font-bold text-gray-600 tracking-wider">
            MINIMAL HOODIES
          </h2>
          <h1 className="text-sm md:text-xl lg:text-2xl font-extrabold my-1 md:my-2 leading-tight text-gray-900">
            Build your Comfort <br />Made for You
          </h1>
          <button className="bg-black text-white px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-sm font-semibold rounded-sm mt-1 md:mt-2 transition-all hover:bg-gray-800">
            SHOP HOODIES
          </button>
        </div>
        <div className="w-1/3 md:w-2/5 aspect-square self-end flex justify-end">
          <img
            src={HOODIE}
            alt="Minimal Hoodie"
            className="w-full h-full object-cover md:object-contain overflow-visible md:overflow-hidden object-bottom select-none"
          />
        </div>
      </div>

      {/* Second Banner */}
      <div className="flex-1 bg-amber-200 rounded-[6px] flex justify-between items-center overflow-hidden min-h-[120px] md:min-h-[220px]">
        <div className="p-4 md:p-12 lg:p-16 flex-1 pr-2">
          <h2 className="text-[10px] md:text-sm font-bold text-gray-600 tracking-wider">
            MINIMAL T-SHIRTS
          </h2>
          <h1 className="text-sm md:text-xl lg:text-2xl font-extrabold my-1 md:my-2 leading-tight text-gray-900">
            Fresh Cotton Looks <br />Everyday Wear
          </h1>
          <button className="bg-black text-white px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-sm font-semibold rounded-sm mt-1 md:mt-2 transition-all hover:bg-gray-800">
            SHOP T-SHIRTS
          </button>
        </div>
        <div className="w-1/3 md:w-2/5 aspect-square self-end flex justify-end">
          <img
            src={Tshirt}
            alt="Minimal T-Shirt"
            className="w-full h-full object-cover md:object-contain overflow-visible md:overflow-hidden object-bottom select-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Promotions; // Added export syntax
