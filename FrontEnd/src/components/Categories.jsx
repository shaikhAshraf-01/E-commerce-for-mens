import { categoryimages } from "../assets/data/imagedata.js";
function Categories() {
  return (
    <div className="w-full px-10 py-5">
      <div>
        <div className="flex justify-between">
          <span className="font-bold size-1.5 flex-1">Shop By category</span>
          <span>View All</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {categoryimages.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer flex flex-col items-center"
            >
              {/* Image Wrap Box */}
              <div className="w-full aspect-square rounded-sm overflow-hidden flex justify-center items-center p-2">
                <img
                  src={item.image}
                  alt={item.name}
                  /* object-contain ensures your transparent PNG items never stretch */
                  className="w-full h-full bg-purple-300 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Category Text Label Below */}
              <h4 className="mt-1 text-sm font-semibold tracking-wide text-gray-800 group-hover:text-black">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default Categories;
