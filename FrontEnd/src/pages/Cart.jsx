import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // Adjust path to match your folder structure

function Cart() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  // Calculate financial details dynamically
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const shipping = subtotal > 500 || subtotal === 0 ? 0 : 40; // Free shipping over ₹500
  const total = subtotal + shipping;

  // Empty State Layout
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <span className="text-5xl md:text-6xl mb-4">🛒</span>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">Your Cart is Empty</h2>
        <p className="text-sm text-gray-500 mt-2 max-w-sm">
          Looks like you haven't added anything to your cart yet. Explore our products to get started!
        </p>
        <Link
          to="/shop"
          className="mt-6 bg-black text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-10 bg-gray-50 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
        Shopping Cart ({cartItems.length})
      </h1>

      {/* Main Grid: Stacked on mobile, 2 columns on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
        
        {/* Left Side: Items List (Takes 2 columns on large screens) */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-100 p-3 md:p-4 shadow-sm flex items-center gap-3 md:gap-4 transition-all"
            >
              {/* Product Thumbnail */}
              <div className="w-20 h-24 md:w-24 md:h-28 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Product Info Middle Area */}
              <div className="flex-1 min-w-0">
                <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider font-semibold">
                  {item.brand}
                </p>
                <h2 className="text-sm md:text-base font-semibold text-gray-800 truncate">
                  {item.name}
                </h2>
                <p className="text-xs text-gray-500 mt-0.5 capitalize">
                  Category: {item.category}
                </p>
                
                {/* Direct Price Presentation */}
                <h3 className="text-base font-bold text-gray-900 mt-2 block lg:hidden">
                  ₹{item.price}
                </h3>
              </div>

              {/* Right Action Side: Price & Remove Button */}
              <div className="flex flex-col items-end justify-between h-24 md:h-28 flex-shrink-0">
                <h3 className="text-base md:text-lg font-bold text-gray-900 hidden lg:block">
                  ₹{item.price}
                </h3>
                
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-500 p-1 rounded-md hover:bg-red-50 transition-colors flex items-center gap-1 text-xs md:text-sm font-medium mt-auto"
                >
                  <span className="text-base">🗑️</span>
                  <span className="hidden md:inline">Remove</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Order Summary Card (Sticky position on scroll) */}
        <div className="bg-white rounded-xl border border-gray-100 p-4 md:p-6 shadow-sm lg:sticky lg:top-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">
            Order Summary
          </h2>

          <div className="space-y-3 mt-4 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-gray-900">₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Charges</span>
              <span className={`font-semibold ${shipping === 0 ? "text-green-600" : "text-gray-900"}`}>
                {shipping === 0 ? "FREE" : `₹${shipping}`}
              </span>
            </div>
            
            {shipping > 0 && (
              <p className="text-[11px] text-amber-600 bg-amber-50 p-2 rounded-md font-medium">
                💡 Add ₹{500 - subtotal} more to unlock free shipping!
              </p>
            )}

            <div className="border-t border-gray-100 pt-3 flex justify-between text-base font-bold text-gray-900">
              <span>Total Amount</span>
              <span>₹{total}</span>
            </div>
          </div>

          <button
            onClick={() => alert("Proceeding to checkout workflow...")}
            className="w-full bg-black text-white py-2.5 md:py-3 text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors mt-6 shadow-sm"
          >
            Proceed to Checkout
          </button>

          <Link
            to="/shop"
            className="block text-center text-xs font-medium text-gray-500 hover:text-black transition-colors mt-4 underline underline-offset-4"
          >
            Back to Shop
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Cart;
