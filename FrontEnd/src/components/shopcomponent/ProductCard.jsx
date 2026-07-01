function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-72 object-cover"
      />

      {/* Product Details */}
      <div className="p-4">

        {/* Category */}
        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        {/* Product Name */}
        <h2 className="text-lg font-semibold mt-1">
          {product.name}
        </h2>

        {/* Brand */}
        <p className="text-gray-600 text-sm mt-1">
          {product.brand}
        </p>

        {/* Rating */}
        <p className="text-yellow-500 mt-2">
          ⭐ {product.rating} ({product.reviews})
        </p>

        {/* Price */}
        <h3 className="text-xl font-bold mt-2">
          ₹{product.price}
        </h3>

        {/* Stock */}
        <p
          className={`mt-2 text-sm ${
            product.stock > 0
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>

        {/* Button */}
        <button
          className="w-full bg-black text-white py-2 rounded-lg mt-4 hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;