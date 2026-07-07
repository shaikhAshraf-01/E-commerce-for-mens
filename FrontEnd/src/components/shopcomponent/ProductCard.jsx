import { useContext } from "react"; 
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"; // Adjust this path to match your folder structure

function ProductCard({ product }) {
  // Fix: Consume cartItems and removeFromCart along with addToCart
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  // Fix: Check if this specific product is already present in the cart
const isItemInCart = cartItems.some((item) => String(item.id) === String(product.id));
  const handleCartClick = (e) => {
    e.preventDefault();   // Stops the Link navigation from firing
    e.stopPropagation();  // Stops the click from bubbling up to the Link
    
    // Fix: Toggle logic between adding and removing
    if (isItemInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full"
    >
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
          onClick={handleCartClick}
          // Fix: Dynamic styling class based on cart status
          className={`w-full py-1.5 md:py-2 text-xs md:text-sm font-medium rounded-lg transition-colors group ${
            product.stock <= 0
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : isItemInCart
              ? "bg-green-600 text-white hover:bg-red-600"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          {/* Fix: Dynamic text logic with CSS hover trick for removal */}
          {product.stock <= 0 ? (
            "Sold Out"
          ) : isItemInCart ? (
            <>
              <span className="group-hover:hidden">Added to Cart ✓</span>
              <span className="hidden group-hover:inline">Remove from Cart</span>
            </>
          ) : (
            "Add to Cart"
          )}
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;
