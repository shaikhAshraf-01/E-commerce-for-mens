import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  // Fix: Load initial cart items from localStorage so data persists on refresh
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Fix: Save cart items to localStorage every time the cart state changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    // Fix: Missing 'return' keyword inside the array update function wrapper
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
  setCartItems((prevItems) => prevItems.filter(item => String(item.id) !== String(productId)));
  };

  return (
    // Fix: Changed 'removeItems' to 'removeFromCart' to match your actual function name
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
} // Fix: Moved closing bracket to correctly encapsulate the return statement inside the function

export default CartProvider;
