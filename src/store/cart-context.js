import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  totalCartItems: 0,
  addToCart: (cartItem) => {},
  removeFromCart: (productId) => {},
  itemIsInCart: (productId) => {},
});

export function CartContextProvider(props) {
  const [cartItems, setcartItems] = useState([]);

  function addToCartHandler(cartItem) {
    setcartItems((prevCartItems) => {
      return prevCartItems.concat(cartItem);
    });
  }
  function removeFromCartHandler(productId) {
    setcartItems((prevCartItems) => {
      return prevCartItems.filter((product) => product.id !== productId);
    });
  }

  function itemIsInCartHandler(productID) {
    return cartItems.some((product) => product.id === productID);
  }

  const context = {
    cartItems: cartItems,
    totalCartItems: cartItems.length,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    itemIsInCart: itemIsInCartHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}
