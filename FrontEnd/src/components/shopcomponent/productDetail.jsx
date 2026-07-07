import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { product as allProducts } from "../../assets/data/product";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext"; // Adjust this path to match your folder structure

function ProductDetail() {
  const { id } = useParams();
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const product = allProducts.find((item) => String(item.id) === String(id));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }
  const isItemInCart = cartItems.some(
    (item) => String(item.id) === String(product.id),
  );
  const handleCartClick = () => {
    if (isItemInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };
  return (
    <div className="lg:h-screen lg:overflow-hidden relative">
      {/* Back button — top left corner */}
      <Link
        to="/shop"
        className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-white shadow-md rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      <div className="max-w-7xl mx-auto px-6 py-6 lg:h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:h-full lg:items-center">
          {/* Product Image */}
          <div className="lg:h-full lg:flex lg:items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full lg:h-[85vh] object-cover rounded-xl"
            />
          </div>

          {/* Product Information */}
          <div className="lg:h-full lg:overflow-y-auto lg:pr-2">
            <p className="text-gray-500">{product.category}</p>

            <h1 className="text-4xl font-bold mt-2">{product.name}</h1>

            <p className="text-xl text-gray-600 mt-2">{product.brand}</p>

            <p className="text-yellow-500 mt-2">
              ⭐ {product.rating} ({product.reviews} Reviews)
            </p>

            <h2 className="text-3xl font-bold mt-4">₹{product.price}</h2>

            <p className="mt-6 text-gray-700">{product.description}</p>

            <p className="mt-4">Stock : {product.stock}</p>

            <button
              onClick={handleCartClick}
              className={`px-8 py-3 rounded-lg mt-8 text-sm font-medium transition-colors group ${
                product.stock <= 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : isItemInCart
                    ? "bg-green-600 text-white hover:bg-red-600"
                    : "bg-black text-white hover:bg-gray-800"
              }`}

            >
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

            {/* Specifications */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Specifications</h2>

              <p>Material : {product.specifications.material}</p>
              <p>Fit : {product.specifications.fit}</p>
              <p>Made In : {product.specifications.madeIn}</p>
              <p>Warranty : {product.specifications.warranty}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
