function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
      <div>
        {/* Responsive Image Aspect Framework scaling ratios */}
        <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Dynamic Card Internal Padding Scaling */}
        <div className="p-3 md:p-4">
          <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider font-semibold">
            {product.category}
          </p>

          <h2 className="text-sm md:text-base font-semibold text-gray-800 mt-0.5 line-clamp-1">
            {product.name}
          </h2>

          <p className="text-gray-500 text-[11px] md:text-xs mt-0.5">
            {product.brand}
          </p>

          <div className="flex items-center gap-1 mt-1">
            <span className="text-xs md:text-sm text-yellow-500">⭐</span>
            <span className="text-xs font-medium text-gray-700">{product.rating}</span>
            <span className="text-[10px] md:text-xs text-gray-400">({product.reviews})</span>
          </div>

          <h3 className="text-base md:text-lg font-bold text-gray-900 mt-2">
            ₹{product.price}
          </h3>

          <p className={`mt-1 text-[11px] md:text-xs font-medium ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>
        </div>
      </div>

      {/* Button wrapper container with contextual scaling spacing bounds */}
      <div className="px-3 pb-3 md:px-4 md:pb-4">
        <button 
          disabled={product.stock <= 0}
          className="w-full bg-black text-white py-1.5 md:py-2 text-xs md:text-sm font-medium rounded-lg hover:bg-gray-800 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {product.stock > 0 ? "Add to Cart" : "Sold Out"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
